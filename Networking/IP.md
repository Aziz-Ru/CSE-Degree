# Internet Protocol(IP)

- Layer 3 Property
- Can be set automatically
- Network and host portion
- 4 bytes in IPv4 -32 bits

## Network vs Host
- a.b.c.x here x is the network bits other remains are host
- Example:192.168.2540/24
- The first 24 bits are network th rest are the host
- This means we can have 2^24 networks and each network has 155 host also xalled a subnet
### Subnet Mask
- 192.168.254.0/24 is also called a subnet
- The subnet has a mask 255.255.255.0
- subnet mask is used to determine whether an ip is in the same subnet

  ### Default Gateway
  - Most network consist of host and default gateway
  - Host A can talk to B directly if both are int e same subnet
  - Otherwise a send it to someone who might know the gateway
  - The Gateway has an ip address and each host should know its gateway
