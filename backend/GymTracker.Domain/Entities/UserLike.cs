using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("user_likes")]
public class UserLike
{
    [Key]
    [Column("user_like_id")]
    public Guid UserLikeId { get; private set; }

    // Sender User Reference

    [Required]
    [Column("sender_user_id")]
    public Guid SenderUserId { get; private set; }

    [ForeignKey(nameof(SenderUserId))]
    public User? SenderUser { get; private set; }

    // Receiver User Reference

    [Required]
    [Column("receiver_user_id")]
    public Guid ReceiverUserId { get; private set; }

    [ForeignKey(nameof(ReceiverUserId))]
    public User? ReceiverUser { get; private set; }

    protected UserLike()
    {
    }

    public UserLike(Guid senderUserId, Guid receiverUserId)
    {
        UserLikeId = Guid.NewGuid();
        SenderUserId = senderUserId;
        ReceiverUserId = receiverUserId;
    }
}

