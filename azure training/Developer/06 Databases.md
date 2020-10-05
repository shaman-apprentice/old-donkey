**Azure SQL logical server** := container for db (PaaS)
- **DTU** := database transaction unit; pre-bundled combination of compute, storage, and IO resources
- **SKU** format: *{pricing tier}\_{compute generation}\_{vCores}*
- configure **access** (public IP, virtual network)
  - At Database-level configure public IP address as well

### Features and other
- **Dynamic data masking** (e.g  replace column "phone number" of table "user" through last 3 numbers on select)

### CosmosDB
db server / account -> db -> collection -> documents (entries)