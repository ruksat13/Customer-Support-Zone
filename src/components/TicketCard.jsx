import "./TicketCard.css";

const TicketCard = ({ ticket, onAddToTask }) => {
    const getPriorityClass = (priority) => {
        if (priority === "HIGH PRIORITY") return "priority-high";
        if (priority === "MEDIUM PRIORITY") return "priority-medium";
        return "priority-low";
    };

    const getStatusClass = (status) => {
        if (status === "Open") return "status-open";
        if (status === "In Progress") return "status-inprogress";
        return "status-resolved";
    };

    return (
        <div className="ticket-card" onClick={() => onAddToTask(ticket)}>
            <div className="ticket-header">
                <h3 className="ticket-title">{ticket.title}</h3>
                <span className={`ticket-status ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                </span>
            </div>

            <p className="ticket-description">{ticket.description}</p>

            <div className="ticket-footer">
                <div className="ticket-meta">
                    <span className={`ticket-priority ${getPriorityClass(ticket.priority)}`}>
                        {ticket.id} {ticket.priority}
                    </span>
                </div>
                <div className="ticket-info">
                    <span className="ticket-customer">👤 {ticket.customer}</span>
                    <span className="ticket-date">📅 {ticket.createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;