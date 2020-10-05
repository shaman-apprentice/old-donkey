## Message
- contains data itself
- expects data dealt with in a certain way <br/><br/>
- **Azure Storage Queues** := Plain simple storage (needs polling)
- 3 types of **Azure Service Bus**:
  - Event Queues (1:1)
  - Event Topics (1:m)
  - Relays (synchronic 2-directional communication)

## Event
- Notification that something has happened <br/><br/>
- **Azure Event Grid**:
  - pay per Event 
  - ![Event Grid](./img/4-event-grid.png)
- **Azure Event Hub** (optimized for high throughput):
  - is PaaS
    - Needs namespace (common settings within them) to hosts hubs
    - SENDER: connect via thread pool and connection string
    - RECEIVER: connect via thread pool and connection string + connection data for storage account
  - Events streamed into disjunct **partitions**
  - Supports *Capture* feature (persist events to storage account and alike)
		
