- Azure Security Center (ASC) :=
	- monitoring service, provides recommendations
	- applies general settings
	- can be activated per subscription
- Data discovery and classification := label / meta data service for sql for classification labels / reports
	- managed per tenant in ASC
- Data retention policy is needed
- Azure Key Vault:
	- management plane (administrate key vault), data plane (storing and retrieving keys)
	- Authentication only via AAD
	- Authorization for management via RBAC for creating, for reading/writing Access Policy
	
- Each Azure Subscription is associated with a single AAD
- RBAC:
	- Security principal (e.g. user A, Application B, ...)
	- Role Definition (allowed to read, write, ...)
	- Scope (e.g. Resource Group, VMs, ...)
	- Role assignment (assigns / combines above 3, to make it active)
	
GDPR := general data protection regulation

IAM := Identity and access management (RBAC)
SAS := Shared access signature (Token granting some access for some time)