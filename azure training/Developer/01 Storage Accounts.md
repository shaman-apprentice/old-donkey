**Storage account** := Container for Azure storage (Blobs, Files, Queues, Tables)
- LRS := Locally-redundant storage
- Shared access signatures (SAS) := token allowing limit access (e.g. read-only) with optional expiration date

**Azure Blobs** (including serving static website)
- Page blob (random read/write, used e.g. for durable disks for VMs)
- Append blob (optimized for appending, e.g. for logging)
- Block blob (up to 100Mb per block / file)

**Azure Files** := network file share via SMB (server message block protocol) or REST

**Azure Queues** ( <= 64kb )

**Azure Tables** (NoSQL, key/values)
  - Storage Account -> Table -> Entities
      - 3 must properties:
        - PartitionKey (entities are partitioned within table)
        - RowKey (PK in combi with PartitionKey)
        - Timestamp
