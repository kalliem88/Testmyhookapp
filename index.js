const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/events', (req, res) => {
    const events = req.body;
    events.forEach(event => {
        if (event.eventType === 'Microsoft.EventGrid.SubscriptionValidationEvent') {
            res.json({ validationResponse: event.data.validationCode });
        } else {
            console.log('Received event:', event);
            // Handle your event logic here
        }
    });
    res.status(200).end();
});

app.listen(3000, () => console.log('Webhook listening on port 3000'));
