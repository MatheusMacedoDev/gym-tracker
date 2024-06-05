namespace GymTracker.Infra.Mail
{
    public class MailRequest
    {
        //destinatário 
        public string? MailReceiver { get; set; }

        //assunto do email
        public string? MailSubject { get; set; }

        //corpo do email
        public string? MailBody { get; set; }
    }
}
