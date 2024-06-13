using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GymTracker.Infra.Mail;
using GymTracker.Infra.Data;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Application.Controllers
{
    [Route("api/send_email")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly EmailSendingService _emailSendingService;
        private readonly DataContext _context;

        public SendEmailController(IEmailService emailService, EmailSendingService emailSendingService, DataContext dataContext)
        {
            _emailService = emailService;
            _emailSendingService = emailSendingService;
            _context = dataContext;
        }

        [HttpPost("send_welcome_email")]
        public async Task<IActionResult> SendWelcomeMail(string email, string userName)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(userName))
            {
                return BadRequest("Email and UserName must not be null or empty.");
            }

            try
            {
                // Log the inputs
                Console.WriteLine($"Sending email to: {email}, with userName: {userName}");

                MailRequest request = new MailRequest()
                {
                    MailReceiver = email,
                    MailSubject = $"Bem-vindo ao GymTracker, {userName}",
                    MailBody = GetHtmlContent(userName)
                };

                // Log the request details
                Console.WriteLine($"MailRequest created: Receiver: {request.MailReceiver}, Subject: {request.MailSubject}, Body: {request.MailBody}");

                await _emailService.SendEmailAsync(request);

                return Ok();
            }
            catch (Exception ex)
            {
                // Log the detailed exception message
                Console.WriteLine($"Exception occurred: {ex}");
                return BadRequest($"An error occurred while sending the email: {ex.Message}");
            }
        }

        [HttpPost("send_password_recovery_email")]
        public async Task<IActionResult> SendRecoveryCodePasswordMail(string email)
        {
            try
            {
                var user = await _context.Users!.FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                {
                    return NotFound("User not found!");
                }

                Random random = new Random();

                int recoveryCode = random.Next(10000, 99999);

                user.PasswordRecoverCode = recoveryCode.ToString().Trim();

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecoveryEmail(user.Email!, recoveryCode);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("validate_password_recovery_code")]
        public async Task<IActionResult> ValidatePasswordRecoveryCode(string email, string code)
        {
            try
            {
                var user = await _context.Users!.FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                {
                    return NotFound("User not found!");
                }

                if (user.PasswordRecoverCode != code)
                {
                    return BadRequest("Invalid recovery code!");
                }

                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private string GetHtmlContent(string userName)
        {
            string Response = @"
                <div style=""width:100%; background-color:rgba(28, 26, 31, 1); padding: 20px;"">
                    <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                        <img src=""https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/gym_tracker_logo.png"" alt="" Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 100px;"" />
                        <h1 style=""color: #333333; text-align: center;"">Bem-vindo ao GymTracker</h1>
                        <p style=""color: #666666; text-align: center;"">Olá <strong>" + userName + @"</strong>,</p>
                        <p style=""color: #666666;text-align: center"">Organize seus treinos, acompanhe seu progresso e alcance suas metas fitness com facilidade.</p>
                        <p style=""color: #666666;text-align: center"">Vamos juntos transformar sua jornada de exercícios!</p>
                        <p style=""color: #666666;text-align: center"">Se tiver alguma dúvida ou precisar de assistência, nossa equipe de suporte está sempre pronta para ajudar.</p>
                        <p style=""color: #666666;text-align: center"">Aproveite sua experiência conosco!</p>
                        <p style=""color: #666666;text-align: center"">Atenciosamente,<br>Equipe GymTracker</p>
                    </div>
                </div>";

            // Return the HTML content
            return Response;
        }
    }
}
