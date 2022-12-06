## Address types (IPv4)

- **Network**: `192.168.1.0` host is zero (host can be up to last 3 numbers)
- **Broadcast**: `192.168.1.255` host is 255
- **localhost**: `127.x.x.x`
- **DHCP**: `0.0.0.0` (Dynamic Host Control Protocol, assigns ip)
- **Local private communication**:
  - `192.168.x.x`
  - `10.0.0.0/8` (first 8 bits -> `10.0.0.0` - `10.255.255.255`)
  - `172.16.0.0/12`
- IPv4 classes:
  - A: `1-127.x.x.x`: first 8 bits reserved for network, rest are hosts
  - B: `128-191.---`: first 16 bits
  - C: `192-223.---`: first 24 bits
  - D: `224-239`: Multicast addresses

## Network configuration

- `ip address` shows ip addresses with their properties (e.g. device)
- `ip link` (devices)
- `ip monitor`
- `ip route` (routing table)
- _MTU_ := Maximum Transfer Unit
- device naming based on PNIDN (Predictable Network Interface Device Names)
  - `ip link show enp30s0`
  - `lspci | grep Ethernet` -> `1e:00.0 Ethernet controller: Realtek Semiconductor [...]`
- configs in `/etc/network/interfaces/` (old) or via _Network Manager_ (daemon based, best configured via `nmtui` or `nmcli`)
- **Name resolution**
  - `dig <name>` resolves host to ip address
  - Static in `/etc/hosts`
  - DNS in `/etc/resolv.conf`
- `traceroute <address>`
- gateway := network node as access point to another network
- default gateway := router

## Firewall

- `iptables` (old)
- `firewalld` configured via `firewall-cmd`
  - in- / out-coming messages are put into zones like "drop", "block", "trusted", ... based on device interface, address, port
