const tickets = [
    {
        id: "#1001",
        title: "Login Issues – Can't Access Account",
        description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot regain access.",
        customer: "John Smith",
        priority: "HIGH PRIORITY",
        status: "Open",
        createdAt: "1/15/2024"
    },
    {
        id: "#1002",
        title: "Payment Failed – Card Declined",
        description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
        customer: "Sarah Johnson",
        priority: "HIGH PRIORITY",
        status: "Open",
        createdAt: "1/17/2024"
    },
    {
        id: "#1003",
        title: "Unable to Download Invoice",
        description: "Customer cannot download their January invoice from the billing section. The download button is unresponsive.",
        customer: "Michael Brown",
        priority: "LOW PRIORITY",
        status: "In Progress",
        createdAt: "1/20/2024"
    },
    {
        id: "#1004",
        title: "Incorrect Billing Address",
        description: "Customer's billing address shows a different city. They updated it but it still displays the old one.",
        customer: "Emily Clark",
        priority: "LOW PRIORITY",
        status: "Open",
        createdAt: "1/22/2024"
    },
    {
        id: "#1005",
        title: "App Crash on Launch",
        description: "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
        customer: "David Wilson",
        priority: "HIGH PRIORITY",
        status: "Open",
        createdAt: "1/25/2024"
    },
    {
        id: "#1006",
        title: "Refund Not Processed",
        description: "Customer requested a refund two weeks ago but has not received the amount yet.",
        customer: "Sophia Taylor",
        priority: "MEDIUM PRIORITY",
        status: "In Progress",
        createdAt: "1/28/2024"
    },
    {
        id: "#1007",
        title: "Two-Factor Authentication Issue",
        description: "Customer is not receiving 2FA codes on their registered phone number.",
        customer: "James Anderson",
        priority: "HIGH PRIORITY",
        status: "Open",
        createdAt: "1/30/2024"
    },
    {
        id: "#1008",
        title: "Unable to Update Profile Picture",
        description: "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
        customer: "Olivia Martinez",
        priority: "LOW PRIORITY",
        status: "Open",
        createdAt: "2/02/2024"
    },
    {
        id: "#1009",
        title: "Subscription Auto-Renewal",
        description: "Customer wants to disable auto-renewal for their subscription but says the toggle is disabled.",
        customer: "Liam Thomas",
        priority: "MEDIUM PRIORITY",
        status: "In Progress",
        createdAt: "2/05/2024"
    },
    {
        id: "#1010",
        title: "Missing Order Confirmation Email",
        description: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
        customer: "Isabella Garcia",
        priority: "MEDIUM PRIORITY",
        status: "Open",
        createdAt: "2/08/2024"
    },
    {
        id: "#1011",
        title: "Discount Code Not Working",
        description: "Customer is trying to apply a discount code at checkout but gets an invalid code error.",
        customer: "Noah White",
        priority: "LOW PRIORITY",
        status: "Open",
        createdAt: "2/10/2024"
    },
    {
        id: "#1012",
        title: "Account Suspended Without Notice",
        description: "Customer's account was suspended without any prior warning or email notification.",
        customer: "Ava Harris",
        priority: "HIGH PRIORITY",
        status: "Open",
        createdAt: "2/12/2024"
    }
];

export default tickets;