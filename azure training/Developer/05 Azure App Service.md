## Azure (Web) App service
- **PaaS** for providing environment to run / host your App
- depending on kind (App Service, API Service, ...) it has different capabilities like:
	- serving static website
	- serving php website
	- (REST) api-server only
	- ...
- Deployment Slots := swap seamlessly environment (e.g. staging and production) <br/><br/>
- WebJob := Background process run in same context as Web App (which only runs when someone visits the website)
	- can be continuos or triggered (Web Hook or CRON)

## App Service Plan
- specifies properties like hardware (e.g. vcores), os, available services (e.g. automatic backup), SLA
- can be custom created
- is a resource, which lives within a resource group
- every app sharing same Service Plan shares same resources -> they scale together
	- scale out := more instances of Service Plan, instance paid by hour

### Azure Mobile App Service
- := Backend for Mobile to communicate with

### Notification Hub
- lives in a namespace