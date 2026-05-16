import "./TaskStatus.css";

const TaskStatus = ({ taskList, resolvedList, onComplete }) => {
    return (
        <div className="task-status">
            <h2 className="task-status-title">Task Status</h2>
            <p className="task-status-subtitle">Select a ticket to add to Task Status</p>

            {taskList.length === 0 ? (
                <p className="no-tasks">No resolved tasks yet.</p>
            ) : (
                <div className="task-list">
                    {taskList.map((task) => (
                        <div key={task.id} className="task-item">
                            <p className="task-item-title">{task.title}</p>
                            <button
                                className="complete-btn"
                                onClick={() => onComplete(task)}
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="resolved-section">
                <h3 className="resolved-title">Resolved Task</h3>
                {resolvedList.length === 0 ? (
                    <p className="no-resolved">No resolved tasks yet.</p>
                ) : (
                    <div className="resolved-list">
                        {resolvedList.map((task) => (
                            <div key={task.id} className="resolved-item">
                                <p className="resolved-item-title">{task.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;