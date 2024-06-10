namespace GymTracker.Infra.Mail
{
    public class EmailSendingService
    {
        private readonly IEmailService _emailService;

        public EmailSendingService(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public async Task SendWelcomeEmail(string email, string userName)
        {
            try
            {
                MailRequest request = new MailRequest()
                {
                    MailReceiver = email,
                    MailSubject = $"Bem-vindo ao GymTracker",
                    MailBody = GetHtmlContentWelcome(userName)
                };

                await _emailService.SendEmailAsync(request);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task SendRecoveryEmail(string email, int code)
        {
            try
            {
                MailRequest request = new MailRequest()
                {
                    MailReceiver = email,
                    MailSubject = $"Alteração de senha",
                    MailBody = GetHtmlContentRecovery(code)
                };

                await _emailService.SendEmailAsync(request);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        private string GetHtmlContentWelcome(string userName)
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

            // Retorna o conteúdo HTML do e-mail
            return Response;
        }

        private string GetHtmlContentRecovery(int code)
        {
            string Response = @"
                <div style=""width:100%; background-color:rgba(28, 26, 31, 1); padding: 20px;"">
                    <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                        <img src=""https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/gym_tracker_logo.png"" alt="" Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 100px;"" />
                        <h1 style=""color: #333333;text-align: center;"">Recuperação de senha</h1>
                        <p style=""color: #666666;font-size: 24px; text-align: center;"">Código de verificação <strong>" + code + @"</strong></p>
                    </div>
                </div>";

            return Response;
        }
    }
}
