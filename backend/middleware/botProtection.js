const botRegex = /bot|crawler|spider|crawling/i;

export const blockBots = (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";

    if (botRegex.test(userAgent)) {
        return res.status(403).json({
            success: false,
            message: "Bot traffic is not allowed"
        });
    }

    next();
};
