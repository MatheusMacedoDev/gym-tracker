using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GymTracker.Utils.Mail;

namespace GymTracker.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public SendEmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMail(string email, string userName)
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

                return Ok("E-mail enviado com sucesso");
            }
            catch (Exception ex)
            {
                // Log the detailed exception message
                Console.WriteLine($"Exception occurred: {ex}");
                return BadRequest($"An error occurred while sending the email: {ex.Message}");
            }
        }


        private string GetHtmlContent(string userName)
        {
            string Response = @"
                <div style=""width:100%; background-color:rgba(96, 191, 197, 1); padding: 20px;"">
                    <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                        <img src=""https://blobvitalhub.blob.core.windows.net/containervitalhub/logotipo.png"" alt="" Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
                        <h1 style=""color: #333333; text-align: center;"">Bem-vindo ao VitalHub!</h1>
                        <p style=""color: #666666; text-align: center;"">Olá <strong>" + userName + @"</strong>,</p>
                        <p style=""color: #666666;text-align: center"">Estamos muito felizes por você ter se inscrito na plataforma VitalHub.</p>
                        <p style=""color: #666666;text-align: center"">Explore todas as funcionalidades que oferecemos e encontre os melhores médicos.</p>
                        <p style=""color: #666666;text-align: center"">Se tiver alguma dúvida ou precisar de assistência, nossa equipe de suporte está sempre pronta para ajudar.</p>
                        <p style=""color: #666666;text-align: center"">Aproveite sua experiência conosco!</p>
                        <p style=""color: #666666;text-align: center"">Atenciosamente,<br>Equipe VitalHub</p>
                    </div>
                </div>";

            // Return the HTML content
            return Response;
        }
    }
}
