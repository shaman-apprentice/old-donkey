Azure App Service is a PaaS website-hosting service

- Mobile CICD with SDKs
  - App Center Diagnostics (sending data on crashes)
  - App Center Analytics (user statistics like session duration)

Application Insights := Integratable SDK to send telemetry, like OS data, docker logs, custom data... (Data is shared with Azure Monitor)

- Activity logging := contains logs for every change done to Azure platform (attached sdk, shutdown vm, autobalancer increased instance, ...)
  - todo take a look at my account
- Log Analytics := Pools of Logs with different APIs in both directions (receiving, sending alerts, visualization, ...)

### Kusto query langauge

- used by Azure logs / monitoring # todo: video

```
Heartbeat
    | where TimeGenerated >= startofweek(ago(21d))
    | summarize dcount(Computer) by endofweek(TimeGenerated) | render barchart kind=default
```
