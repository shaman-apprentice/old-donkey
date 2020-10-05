**Function App** := Execution Environment for containing Azure Functions
- must be linked to a Storage account (for saving settings)
- 2 kinds of Service Plan
  - **Consumption Service Plan** (pay as used), has 5, or 10min timeout
  - **App Service Plan** within "configured VM" / PaaS (not serverless, but no timeout)

**Durable Function** := Stateful function
- Client function instantiates Orchestrator function (REST Endpoint), passes name of Orchestrator as parameter
  - returns url for polling result
- Orchestrator function orders Activity function
- Activity function executes actual work (is Azure Function)

CRON := command run on notice - *{second} {minute} {hour} {day} {month} {day-of-week}*
