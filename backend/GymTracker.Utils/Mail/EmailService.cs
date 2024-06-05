using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.Extensions.Options;
using MimeKit;

namespace GymTracker.Utils.Mail
{
    public class EmailService : IEmailService
    {
        //variável privada com as configs do email
        private readonly EmailSettings emailSettings;


        public EmailService(IOptions<EmailSettings> options)
        {
            //obtem as configs do email e armazena na variável privada
            emailSettings = options.Value;
        }

        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            try
            {
                //objeto que representa o e-mail
                var email = new MimeMessage();

                //define o remetente do e-mail
                email.Sender = MailboxAddress.Parse(emailSettings.MailSender);

                //adiciona o destinatário do e-mail
                email.To.Add(MailboxAddress.Parse(mailRequest.MailReceiver));

                //define o assunto do e-mail
                email.Subject = mailRequest.MailSubject;

                //cria o corpo do email
                var builder = new BodyBuilder();

                //define o corpo do email como html
                builder.HtmlBody = mailRequest.MailBody;

                //define o corpo do email no obj MimeMessage
                email.Body = builder.ToMessageBody();

                //cria um client SMTP para envio de email
                using (var smtp = new SmtpClient())
                {
                    //conecta-se ao servidor SMTP usando os dados do emailSettings
                    smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

                    //autentica-se no servidor SMTP usando os dados do emailSettings
                    smtp.Authenticate(emailSettings.MailSender, emailSettings.SenderPassword);

                    //envia o e-mail assíncrono
                    await smtp.SendAsync(email);
                }

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
