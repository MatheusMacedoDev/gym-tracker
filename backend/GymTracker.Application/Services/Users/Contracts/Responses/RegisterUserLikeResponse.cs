namespace GymTracker.Application.Services.Contracts.Responses;

public record RegisterUserLikeResponse
(
    Guid userLikeId,
    Guid senderUserId,
    Guid receiverUserId
);
