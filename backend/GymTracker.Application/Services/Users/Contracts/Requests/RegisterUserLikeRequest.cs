namespace GymTracker.Application.Services.Contracts.Requests;

public record RegisterUserLikeRequest
(
    Guid senderUserId,
    Guid receiverUserId
);
