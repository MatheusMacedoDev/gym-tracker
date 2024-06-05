namespace GymTracker.Infra.Mail
{
    public class EmailSettings
    {
        //email do remetente
        public string? MailSender { get; set; }

        //senha do remetente
        public string? SenderPassword { get; set; }

        //host do servidor SMTP
        public string? Host { get; set; }

        //nome exibido do remetente
        public string? SenderDisplayname { get; set; }

        //porta do servidor SMTP
        public int Port { get; set; }
    }
}
