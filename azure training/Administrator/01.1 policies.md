SKU := Stock Keeping Unit

Policy definition := condition + effect
- `[parameters('x')]` template, parameters are defined through definition assignment to set of resources
- New-AzPolicyAssignment -Name 'bla' -DisplayName 'I do ...' -Scope $rg.ResourceId  -PolicyDefinition $definition
Policy initiative := collection of policy definitions (which can be assigned all at once)

Policy definitions can be assigned to resources, subscriptions or management groups
![img/management group img](management-groups-tree.png)
