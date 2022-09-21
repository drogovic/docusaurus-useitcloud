

FLEXIBLE ENGINE

Only for internal use.
Classic Load Balancer

Create two VMs 

Choose:
POST  /v2.0/agreement/ 
Paste in body:
appropriation:
    account: prologue
    user: prologue
agreement:
    name: '360'
    responder: prologue
    action:
        -
            broker: ''
    placement:
        ubuntu:
            region: eu-west-0
            option:
                projectid: a43d7085a38e44a7b1642755804d7ac3

    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            agent: none
            login: cloud
            os: ubuntu
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_02c40a56-dcfa-4a65-84ea-b55b5905154f

    port:
        pssh:
            name-label: uichmssh
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 100
        phttp:
            name-label: uichmhttp
            protocol: tcp
            from: 80
            to: 80
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 200
    
    firewall:
        ubuntu:
            reference: uicsshhttp
            port:
                - pssh
                - phttp
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    
    network:
        ubuntu:        
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
            subnet:
                - ubuntu
            placement: ubuntu
    
    userdata:
        ubuntu:
            script:
                - wget --timeout 10 --tries=2 https://raw.githubusercontent.com/useitcloud/scripts/master/apache/apache2_php7_ubuntu.sh
                - bash ./apache2_php7_ubuntu.sh
    node:
        vm1:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu100
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu

        vm2:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu200
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - vm1
            - vm2


Verify deployment

Paste ELB Public IP in the broser:
 

Create Load  balancer

Choose:

POST
/v2.0/provider/flexibleengine/{uuid}/regions/{region}/elbs/classic

Paste in data:
```
{
  "avzone": "",
  "description": "rdz desc elb 10",
  "front_ip": "90.84.185.128",
  "health_check": [
    {
      "name": "rdzhealth10",
      "protocol": "TCP",
      "port": 80,
      "interval": 5,
      "timeout": 10,
      "target": "/",
      "healthy_threshold": 3,
      "unhealthy_threshold": 3
    }
  ],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "TCP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0,
        "instances": [
          "f36a2ca3-0b56-43b0-83da-7acc3460efda", "303af99e-966b-4784-90a6-539e870985d8"
        ]
      },
      "protocol": "TCP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "security_groups": [],
  "subnets": [],
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}
```
RESPONSE
```
{
  "action": "create_elb",
  "result": {
    "elb_id": "8d9c060a2f9647c198a837216c1bc502",
    "elb_option": {
      "elb_id": "8d9c060a2f9647c198a837216c1bc502",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-02-04 08:36:20",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "TCP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "",
          "healthy_threshold": 3,
          "id": "9ad0127867364b32bd8e16c3517db3fe",
          "listener_id": "38de6518ea7d4d10bd269a10a97dee25",
          "unhealthy_threshold": 3,
          "update_time": "2020-02-04 08:36:20"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "TCP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-02-04 08:36:20",
          "description": "listener for rdzelb101 elb",
          "id": "38de6518ea7d4d10bd269a10a97dee25",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "8d9c060a2f9647c198a837216c1bc502",
          "name": "rdzlistener10",
          "port": 80,
          "protocol": "TCP",
          "session_sticky": true,
          "status": "ACTIVE",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "tcp_timeout": 1,
          "update_time": "2020-02-04 08:36:20"
        }
      ]
    }
  }
}
```
See IHM Flexible Engine:

 

 

 











Web connection test

Paste ELB Public IP in the broser:
 


Refresh and observe Server IP:
 

Load balancer is working well.
Enhanced Load Balancer

Create two VMs 

Choose:
POST  /v2.0/agreement/ 
Paste in body:

appropriation:
    account: prologue
    user: prologue
agreement:
    name: '360'
    responder: prologue
    action:
        -
            broker: ''
    placement:
        ubuntu:
            region: eu-west-0
            option:
                projectid: a43d7085a38e44a7b1642755804d7ac3

    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            agent: none
            login: cloud
            os: ubuntu
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_02c40a56-dcfa-4a65-84ea-b55b5905154f

    port:
        pssh:
            name-label: uichmssh
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 100
        phttp:
            name-label: uichmhttp
            protocol: tcp
            from: 80
            to: 80
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 200
    
    firewall:
        ubuntu:
            reference: uicsshhttp
            port:
                - pssh
                - phttp
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    
    network:
        ubuntu:        
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
            subnet:
                - ubuntu
            placement: ubuntu
    
    userdata:
        ubuntu:
            script:
                - wget --timeout 10 --tries=2 https://raw.githubusercontent.com/useitcloud/scripts/master/apache/apache2_php7_ubuntu.sh
                - bash ./apache2_php7_ubuntu.sh
    node:
        vm1:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu100
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu

        vm2:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu200
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - vm1
            - vm2





Verify deployment

Paste ELB Public IP in the broser:
 






Create Load  balancer

Choose:

POST
/v2.0/provider/flexibleengine/{uuid}/regions/{region}/elbs/enhanced

Paste in data:

{
  "algorithm": "",
  "description": "rdz enh ext",
  "front_ip": "e2ad0950-f62c-448c-82aa-a566cd2ce7f3",
  "health_check": [
    {
      "healthy_threshold": 3,
      "interval": 3,
      "method": "GET",
      "name": "rdzhealth10",
      "option": {
        "admin_state_up": true,
        "domain_name": "",
        "expected_codes": ""
      },
      "port": 80,
      "protocol": "HTTP",
      "target": "/",
      "timeout": 10
    }
  ],
  "instances": [],
  "listener": [
    {
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "admin_state_up": true,
        "sni_container_refs": [],
        "algorithm": "ROUND_ROBIN",
        "client_ca_tls_container_ref": [],
        "connection_limit": 1,
        "default_pool_id": "",
        "default_tls_container_ref": "",
        "description": "",
        "http2_enable": true,
        "instances": ["1dd29d09-f3d5-4b63-baa1-3611980c4d88", "b76a9003-2c94-48d7-a5fd-374d18d7def7"],
        "session_cookie_name": "",
        "session_persistence_timeout": 10,
        "session_type": "SOURCE_IP",
        "tls_ciphers_policy": ""
      },
      "protocol": "HTTP",
      "weight": 10
    }
  ],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 1,
    "eip_type": "5_bgp",
    "ip_version": 4,
    "provider": "vlb",
    "vip_address": "10.10.0.81",
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": [
    "94731884-0c1c-4204-85c1-3f3353d1ca43"
  ],
  "type": "External"
}

Response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "0cfc0e00-c4b0-4b73-bda1-1275d0bfcd16",
    "elb_option": {
      "backend_groups": [
        {
          "instances": [
            "1dd29d09-f3d5-4b63-baa1-3611980c4d88",
            "b76a9003-2c94-48d7-a5fd-374d18d7def7"
          ],
          "listener_id": "7d082fce-cfbd-41de-8ddc-66145e2a77cd",
          "listener_name": "rdzlistener10",
          "pool_id": "82b12169-a7de-4c3d-8619-aa06848af7a6",
          "port": 80,
          "protocol": "HTTP",
          "weight": 10
        }
      ],
      "elb_id": "0cfc0e00-c4b0-4b73-bda1-1275d0bfcd16",
      "generation": "enhanced",
      "healthcheck": [
        {
          "admin_state_up": true,
          "delay": 3,
          "domain_name": null,
          "expected_codes": "2xx,3xx,4xx",
          "http_method": "GET",
          "id": "06cc2150-febc-49f3-a54d-6cae53ba39bc",
          "max_retries": 3,
          "monitor_port": 80,
          "name": "rdzelb100-healthcheck-0",
          "pools": [
            {
              "id": "82b12169-a7de-4c3d-8619-aa06848af7a6"
            }
          ],
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "timeout": 10,
          "type": "HTTP",
          "url_path": "/"
        }
      ],
      "listener": [
        {
          "admin_state_up": true,
          "client_ca_tls_container_ref": null,
          "connection_limit": -1,
          "created_at": "2020-02-04T11:26:17",
          "default_pool_id": null,
          "default_tls_container_ref": null,
          "description": "",
          "http2_enable": true,
          "id": "7d082fce-cfbd-41de-8ddc-66145e2a77cd",
          "insert_headers": {},
          "loadbalancers": [
            {
              "id": "0cfc0e00-c4b0-4b73-bda1-1275d0bfcd16"
            }
          ],
          "name": "rdzlistener10",
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "protocol": "HTTP",
          "protocol_port": 80,
          "sni_container_refs": [],
          "tags": [],
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tls_ciphers_policy": null,
          "updated_at": "2020-02-04T11:26:17"
        }
      ]
    }
  }
}



See IHM Flexible Engine:

 

 

 

 

 




Web connection test


Paste the IP address in the browser

 




 




 


















ANNEXE 1

Manifest for one VM


appropriation:
    account: prologue
    user: prologue
agreement:
    name: '329'
    responder: prologue
    action:
        -
            broker: ''
    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            login: cloud
            os: ubuntu
            agent: none
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_02c40a56-dcfa-4a65-84ea-b55b5905154f
    port:
        f9dfc07e-6dc7-4ebb-8316-f51b77315f28:
            name-label: uicoygi3d8cgx4a
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
    firewall:
        ubuntu:
            reference: c0d381d0-7a14-4d6d-ae45-c9bad7a94cef
            port:
                - f9dfc07e-6dc7-4ebb-8316-f51b77315f28
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    network:
        ubuntu:
            placement: ubuntu
            subnet:
                - ubuntu
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
    userdata:
        ubuntu:
            script:
                - 'eval "`echo bWtkaXIgLXAgL3Zhci9saWIvdWljCm1rZGlyIC1wIC92YXIvbGliL3VpYy1hZ2VudC9leGVjLWluc3RydWN0aW9ucwpjZCAvdmFyL2xpYi91aWMtYWdlbnQvZXhlYy1pbnN0cnVjdGlvbnMKCgojIEdMT0JBTCBWQVJJQUJMRVMKY2F0ID4+IC92YXIvbGliL3VpYy9tZXRhZGF0YSA8PCdVSUNNRVRBREFUQScKZXhwb3J0IHVpY19hY2NvdW50X25hbWU9InByb2xvZ3VlIgpleHBvcnQgdWljX3Byb3ZpZGVyPSJmbGV4aWJsZWVuZ2luZSIKZXhwb3J0IHVpY19yZWdpb249ImV1LXdlc3QtMCIKZXhwb3J0IHVpY19hcHBsaWNhdGlvbl9uYW1lPSJVYnVudHUgMTYuMDQgeDY0IgpleHBvcnQgdWljX25vZGVfbmFtZT0idWJ1bnR1IgpVSUNNRVRBREFUQQoKLiAvdmFyL2xpYi91aWMvbWV0YWRhdGEKCgojIFNDUklQVCBWQVJJQUJMRVMKCgojIFBSRURFRklORUQgU0NSSVBUCgoKIyBBRERJVElPTkFMIFNDUklQVApjYXQgPiB1aWNfdXNlcmRhdGFfYWRkaXRpb25hbF9zY3JpcHQgPDwnVUlDMkVPRicKd2dldCAtLXRpbWVvdXQgMTAgLS10cmllcz0yIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS91c2VpdGNsb3VkL3NjcmlwdHMvbWFzdGVyL2FwYWNoZS9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoCmJhc2ggLi9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoClVJQzJFT0YKCgojIE9SQ0hFU1RSQVRJT04gU0NSSVBUUwoKCiMgU0NSSVBUUyBFWEVDVVRJT04KCiMgVUJVTlRVIE9OIEZMRVhJQkxFIEVOR0lORQpzdWRvIHN5c3RlbWN0bCBzdG9wIGFwdC1kYWlseS5zZXJ2aWNlCgpiYXNoIC4vdWljX3VzZXJkYXRhX2FkZGl0aW9uYWxfc2NyaXB0Cg== | base64 -d`"'
    placement:
        ubuntu:
            region: eu-west-0
            option.projectid: a43d7085a38e44a7b1642755804d7ac3
    node:
        ubuntu:
            access: public
            provider: flexibleengine
            label: rdzubuntu-bsmhkde9iwoccjzb
            tenant: flexibleengine
            option.direct_access: 'false'
            option.public_ip_id: c41c0f8a-d912-457f-982a-95319914adce
            option:
                zone: eu-west-0b
            image: ubuntu
            compute: ubuntu
            keypair: ubuntu
            firewall:
                - ubuntu
            subnet:
                - ubuntu
            network: ubuntu
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - ubuntu







appropriation:
    account: prologue
    user: prologue
agreement:
    name: '332'
    responder: prologue
    action:
        -
            broker: ''
    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            login: cloud
            os: ubuntu
            agent: none
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_4eb20df6-3eb6-435a-b520-599da92ffce9
    port:
        e8acfb38-7767-471d-a040-ed84b4f10295:
            name-label: uicvq7zcrceqbra
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
        cba9bda4-a488-4fbd-90cc-fc51392d22df:
            name-label: uiccp42gsmzodda
            protocol: tcp
            from: 80
            to: 80
            direction: in
            range: 0.0.0.0/0
    firewall:
        ubuntu:
            reference: dfd39d57-9eff-40d4-91a6-bdf837f75f71
            port:
                - e8acfb38-7767-471d-a040-ed84b4f10295
                - cba9bda4-a488-4fbd-90cc-fc51392d22df
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    network:
        ubuntu:
            placement: ubuntu
            subnet:
                - ubuntu
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
    userdata:
        ubuntu:
            script:
                - 'eval "`echo bWtkaXIgLXAgL3Zhci9saWIvdWljCm1rZGlyIC1wIC92YXIvbGliL3VpYy1hZ2VudC9leGVjLWluc3RydWN0aW9ucwpjZCAvdmFyL2xpYi91aWMtYWdlbnQvZXhlYy1pbnN0cnVjdGlvbnMKCgojIEdMT0JBTCBWQVJJQUJMRVMKY2F0ID4+IC92YXIvbGliL3VpYy9tZXRhZGF0YSA8PCdVSUNNRVRBREFUQScKZXhwb3J0IHVpY19hY2NvdW50X25hbWU9InByb2xvZ3VlIgpleHBvcnQgdWljX3Byb3ZpZGVyPSJmbGV4aWJsZWVuZ2luZSIKZXhwb3J0IHVpY19yZWdpb249ImV1LXdlc3QtMCIKZXhwb3J0IHVpY19hcHBsaWNhdGlvbl9uYW1lPSJVYnVudHUgMTYuMDQgeDY0IgpleHBvcnQgdWljX25vZGVfbmFtZT0idWJ1bnR1IgpVSUNNRVRBREFUQQoKLiAvdmFyL2xpYi91aWMvbWV0YWRhdGEKCgojIFNDUklQVCBWQVJJQUJMRVMKCgojIFBSRURFRklORUQgU0NSSVBUCgoKIyBBRERJVElPTkFMIFNDUklQVApjYXQgPiB1aWNfdXNlcmRhdGFfYWRkaXRpb25hbF9zY3JpcHQgPDwnVUlDMkVPRicKd2dldCAtLXRpbWVvdXQgMTAgLS10cmllcz0yIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS91c2VpdGNsb3VkL3NjcmlwdHMvbWFzdGVyL2FwYWNoZS9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoCmJhc2ggLi9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoClVJQzJFT0YKCgojIE9SQ0hFU1RSQVRJT04gU0NSSVBUUwoKCiMgU0NSSVBUUyBFWEVDVVRJT04KCiMgVUJVTlRVIE9OIEZMRVhJQkxFIEVOR0lORQpzdWRvIHN5c3RlbWN0bCBzdG9wIGFwdC1kYWlseS5zZXJ2aWNlCgpiYXNoIC4vdWljX3VzZXJkYXRhX2FkZGl0aW9uYWxfc2NyaXB0Cg== | base64 -d`"'
    placement:
        ubuntu:
            region: eu-west-0
            option.projectid: a43d7085a38e44a7b1642755804d7ac3
    node:
        ubuntu:
            access: public
            provider: flexibleengine
            label: rdzubuntu100
            tenant: flexibleengine
            option.direct_access: 'false'
            option:
                zone: eu-west-0b
            image: ubuntu
            compute: ubuntu
            keypair: ubuntu
            firewall:
                - ubuntu
            subnet:
                - ubuntu
            network: ubuntu
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - ubuntu


Manifest for two VM s
appropriation:
    account: prologue
    user: prologue
agreement:
    name: '360'
    responder: prologue
    action:
        -
            broker: ''
    placement:
        ubuntu:
            region: eu-west-0
            option:
                projectid: a43d7085a38e44a7b1642755804d7ac3

    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            agent: none
            login: cloud
            os: ubuntu
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_02c40a56-dcfa-4a65-84ea-b55b5905154f

    port:
        pssh:
            name-label: uichmssh
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 100
        phttp:
            name-label: uichmhttp
            protocol: tcp
            from: 80
            to: 80
            direction: in
            range: 0.0.0.0/0
            option:
                priority: 200
    
    firewall:
        ubuntu:
            reference: uicsshhttp
            port:
                - pssh
                - phttp
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    
    network:
        ubuntu:        
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
            subnet:
                - ubuntu
            placement: ubuntu
    
    userdata:
        ubuntu:
            script:
                - wget --timeout 10 --tries=2 https://raw.githubusercontent.com/useitcloud/scripts/master/apache/apache2_php7_ubuntu.sh
                - bash ./apache2_php7_ubuntu.sh
    node:
        vm1:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu100
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu

        vm2:
            access: public
            compute: ubuntu
            firewall: 
              - ubuntu
            image: ubuntu
            keypair: ubuntu
            label: rdzubuntu200
            network: ubuntu
            option: 
               direct_access: "false"
               zone: eu-west-0b
            provider: flexibleengine
            subnet: 
              - ubuntu
            tenant: flexibleengine
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - vm1
            - vm2


ANNEXE 2


====================================================
CREATE ELB - JSON
====================================================

====================================================
CLASSIC
====================================================
---------
EXTERNAL
---------
1)

{
  "front_ip": "90.84.198.142",
  "name": "rdzelb202",
  "option": {
    "admin_state_up": true,
    "bandwidth_size": 1
  },
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

--------
response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "dc3eeb7c87de49248231aa2e79fafc32",
    "elb_option": {
      "elb_id": "dc3eeb7c87de49248231aa2e79fafc32",
      "generation": "classic",
      "healthcheck": [],
      "listener": []
    }
  }
}

2) listeners

{

  "description": "rdz description",
  "front_ip": "90.84.190.61",

  "listener": [
    {
      "description": "rdz listener",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "cookie_timeout": 100,
        "session_sticky": false,
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb26",
  "option": {
    "admin_state_up": true,
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

---
response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "4faca98aade24b149c863142e7caf84e",
    "elb_option": {
      "elb_id": "4faca98aade24b149c863142e7caf84e",
      "generation": "classic",
      "healthcheck": [],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-24 15:12:09",
          "description": "listener for rdzelb26 elb",
          "id": "5dddc96b7ea1432e89f8d20c8489c874",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "4faca98aade24b149c863142e7caf84e",
          "name": "rdzelb26-listener-0",
          "port": 80,
          "protocol": "HTTP",
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-24 15:12:09"
        }
      ]
    }
  }
}

3) listeners + healthcheck
{
  "avzone": "",
  "description": "rdz desc elb 10",
  "front_ip": "90.84.196.251",
  "health_check": [
       {
          "name": "rdzhealth10",
           "protocol":  "HTTP",
            "port": 80,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      }
],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "security_groups": [],
  "subnets": [],
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "17d24ee6784d4994adc86a534bb4da4a",
    "elb_option": {
      "elb_id": "17d24ee6784d4994adc86a534bb4da4a",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-28 08:49:45",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "64698ff0541245dd98a73a683e67e49d",
          "listener_id": "71db9adde91942b4804f7c431e6d01e8",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 08:49:45"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 08:49:44",
          "description": "listener for rdzelb101 elb",
          "id": "71db9adde91942b4804f7c431e6d01e8",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "17d24ee6784d4994adc86a534bb4da4a",
          "name": "rdzelb101-listener-0",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 08:49:44"
        }
      ]
    }
  }
}

4) 2 listeners + healthcheck
{
  "avzone": "",
  "description": "rdz desc elb 10",
  "front_ip": "90.84.196.251",
  "health_check": [
       {
          "name": "rdzhealth10",
           "protocol":  "HTTP",
            "port": 80,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      }
],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0
      },
      "protocol": "HTTP"
    }
,
    {
      "description": "desc rdzlistener20",
      "instance_port": 8080,
      "instance_protocol": "HTTP",
      "lb_port": 8080,
      "name": "rdzlistener20",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "security_groups": [],
  "subnets": [],
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "5f0ddc69d37a44bc9060813306060439",
    "elb_option": {
      "elb_id": "5f0ddc69d37a44bc9060813306060439",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-28 09:05:34",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "a2c88c4c7178416d9333c3c9915d4670",
          "listener_id": "76e4baaf72e84841a1c8a687e81a81d6",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 09:05:34"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 09:05:33",
          "description": "listener for rdzelb101 elb",
          "id": "76e4baaf72e84841a1c8a687e81a81d6",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "5f0ddc69d37a44bc9060813306060439",
          "name": "rdzelb101-listener-0",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 09:05:33"
        },
        {
          "backend_port": 8080,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 09:05:33",
          "description": "listener for rdzelb101 elb",
          "id": "ca34628dadd94e5b8faeb82f294d7b4e",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "5f0ddc69d37a44bc9060813306060439",
          "name": "rdzelb101-listener-0",
          "port": 8080,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 09:05:33"
        }
      ]
    }
  }
}

5) 2 listeners + 2 healthcheck

{
  "avzone": "",
  "description": "rdz desc elb 10",
  "front_ip": "90.84.196.251",
  "health_check": [
       {
          "name": "rdzhealth10",
           "protocol":  "HTTP",
            "port": 80,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      },
       {
          "name": "rdzhealth20",
           "protocol":  "HTTP",
            "port": 8080,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      }
],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0
      },
      "protocol": "HTTP"
    }
,
    {
      "description": "desc rdzlistener20",
      "instance_port": 8080,
      "instance_protocol": "HTTP",
      "lb_port": 8080,
      "name": "rdzlistener20",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "security_groups": [],
  "subnets": [],
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "8b637f5ce57e4e97a0a5f0abd177dde5",
    "elb_option": {
      "elb_id": "8b637f5ce57e4e97a0a5f0abd177dde5",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-28 09:16:22",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "dcd41163a54e4bf89072ca7e801e2293",
          "listener_id": "a38c15b280cf4b4c8bc480ae23e252b5",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 09:16:22"
        },
        {
          "create_time": "2020-01-28 09:16:22",
          "healthcheck_connect_port": 8080,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "090b8d832b1443d0aeecd406eba4e97b",
          "listener_id": "95eded8f34af49eebaf42c07476daefe",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 09:16:22"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 09:16:21",
          "description": "listener for rdzelb101 elb",
          "id": "a38c15b280cf4b4c8bc480ae23e252b5",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "8b637f5ce57e4e97a0a5f0abd177dde5",
          "name": "rdzlistener10",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 09:16:21"
        },
        {
          "backend_port": 8080,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 09:16:21",
          "description": "listener for rdzelb101 elb",
          "id": "95eded8f34af49eebaf42c07476daefe",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "8b637f5ce57e4e97a0a5f0abd177dde5",
          "name": "rdzlistener20",
          "port": 8080,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 09:16:21"
        }
      ]
    }
  }
}

6) 2 listeners, 2 health-checks, 2 instances

{
  "avzone": "",
  "description": "rdz desc elb 10",
  "front_ip": "90.84.190.37",
  "health_check": [
       {
          "name": "rdzhealth10",
           "protocol":  "HTTP",
            "port": 80,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      },
       {
          "name": "rdzhealth20",
           "protocol":  "HTTP",
            "port": 8080,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      }
],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0,
"instances": ["6345c832-274d-4f58-93e0-0af8ccb23be7"]
      },
      "protocol": "HTTP"
    }
,
    {
      "description": "desc rdzlistener20",
      "instance_port": 8080,
      "instance_protocol": "HTTP",
      "lb_port": 8080,
      "name": "rdzlistener20",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0,
"instances": ["f6476bb8-c42c-436f-9efb-b51034c34265"]
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": ""
  },
  "security_groups": [],
  "subnets": [],
  "type": "External",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

-----------

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "8c7620e1b8b240f388201a7f563cd4a2",
    "elb_option": {
      "elb_id": "8c7620e1b8b240f388201a7f563cd4a2",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-28 15:16:16",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "2f8939a7608b4cdaa5a18c5abd7e7816",
          "listener_id": "bdd20db6cd31495eb7fafb717ed0c45b",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 15:16:16"
        },
        {
          "create_time": "2020-01-28 15:16:17",
          "healthcheck_connect_port": 8080,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "6d2820d6f5ef4d44ba96a5a5e9efff10",
          "listener_id": "a8d47f2229bd4fd78f1e51596bf17407",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-28 15:16:17"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 15:16:15",
          "description": "listener for rdzelb101 elb",
          "id": "bdd20db6cd31495eb7fafb717ed0c45b",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "8c7620e1b8b240f388201a7f563cd4a2",
          "name": "rdzlistener10",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 15:16:15"
        },
        {
          "backend_port": 8080,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-28 15:16:15",
          "description": "listener for rdzelb101 elb",
          "id": "a8d47f2229bd4fd78f1e51596bf17407",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "8c7620e1b8b240f388201a7f563cd4a2",
          "name": "rdzlistener20",
          "port": 8080,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-28 15:16:15"
        }
      ]
    }
  
  Creation elb classic External, 2 listeners, 2 healthchecks + 2 backend ecs = ok.
  Maintenant creation elb classic Internal


++++++++++++++++++++++++++++++++++++

---------
INTERNAL
---------
1)

list elb internal
{
  "action": "list_elbs",
  "result": [
    {
      "admin_state_up": 0,
      "bandwidth": null,
      "create_time": "2020-01-28 16:16:58",
      "description": "",
      "id": "6be4277a382843d99ea560362368d5d6",
      "name": "rdzelb-1dca",
      "security_group_id": "e2c189d7-8935-4204-9b32-6284c7c940ce",
      "status": "PENDING_CREATE",
      "type": "Internal",
      "update_time": "2020-01-28 16:16:58",
      "vip_address": "10.10.0.2",
      "vip_subnet_id": "8acf1acc-e9d4-45e9-8d06-040ea2cb965f",
      "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
    }
  ]
}

1) simple

{
  "avzone": "eu-west-0b",
  "description": "rdz desc elb 10",
  "front_ip": "10.10.0.2",
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "security_groups": ["e2c189d7-8935-4204-9b32-6284c7c940ce"],
  "subnets": ["8acf1acc-e9d4-45e9-8d06-040ea2cb965f"],
  "type": "Internal",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "b42553f1de2942e6875f87c2d66ec210",
    "elb_option": {
      "elb_id": "b42553f1de2942e6875f87c2d66ec210",
      "generation": "classic",
      "healthcheck": [],
      "listener": []
    }
  }
}

list elb:

{
  "action": "list_elbs",
  "result": [
    {
      "admin_state_up": 1,
      "bandwidth": null,
      "create_time": "2020-01-29 09:44:28",
      "description": "rdz desc elb 10",
      "id": "b42553f1de2942e6875f87c2d66ec210",
      "name": "rdzelb101",
      "security_group_id": "e2c189d7-8935-4204-9b32-6284c7c940ce",
      "status": "ACTIVE",
      "type": "Internal",
      "update_time": "2020-01-29 09:48:58",
      "vip_address": "10.10.0.2",
      "vip_subnet_id": "8acf1acc-e9d4-45e9-8d06-040ea2cb965f",
      "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
    }
  ]
}



2) 1 listenet + 1 healthcheck

{
  "avzone": "eu-west-0b",
  "description": "rdz desc elb 10",
  "front_ip": "10.10.0.2",
  "health_check": [
       {
          "name": "rdzhealth10",
           "protocol":  "HTTP",
            "port": 80,
           "interval": 5,
            "timeout":  10,
            "target": "/",
            "healthy_threshold": 3,
            "unhealthy_threshold": 3
      }
],
  "instances": [],
  "listener": [
    
    {
      "description": "desc rdzlistener20",
      "instance_port": 8080,
      "instance_protocol": "HTTP",
      "lb_port": 8080,
      "name": "rdzlistener20",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0,
"instances": []
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb101",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "security_groups": ["e2c189d7-8935-4204-9b32-6284c7c940ce"],
  "subnets": ["8acf1acc-e9d4-45e9-8d06-040ea2cb965f"],
  "type": "Internal",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "3273470ba8ce474facb0ed7582cdc662",
    "elb_option": {
      "elb_id": "3273470ba8ce474facb0ed7582cdc662",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-29 13:35:51",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "6f2d58d3749e4bf4a684e35a4f30e9cb",
          "listener_id": "43a3e3f779934eed960e1ef683aae737",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-29 13:35:51"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-29 13:35:51",
          "description": "listener for rdzelb101 elb",
          "id": "43a3e3f779934eed960e1ef683aae737",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "3273470ba8ce474facb0ed7582cdc662",
          "name": "rdzlistener20",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-29 13:35:51"
        }
      ]
    }
  }
}



-----------------

3)  2 listeners + 2 healthchecks + 2 instances

{
  "avzone": "eu-west-0b",
  "description": "rdz desc elb 10",
  "front_ip": "10.10.0.2",
  "health_check": [
    {
      "name": "rdzhealth10",
      "protocol": "HTTP",
      "port": 80,
      "interval": 5,
      "timeout": 10,
      "target": "/",
      "healthy_threshold": 3,
      "unhealthy_threshold": 3
    },
    {
      "name": "rdzhealth20",
      "protocol": "HTTP",
      "port": 8080,
      "interval": 5,
      "timeout": 10,
      "target": "/",
      "healthy_threshold": 3,
      "unhealthy_threshold": 3
    }
  ],
  "instances": [],
  "listener": [
    {
      "description": "desc rdzlistener10",
      "instance_port": 80,
      "instance_protocol": "HTTP",
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 100,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 5,
        "tcp_timeout": 0,
        "udp_timeout": 0,
        "instances": [
          "f6476bb8-c42c-436f-9efb-b51034c34265"
        ]
      },
      "protocol": "HTTP"
    },
    {
      "description": "desc rdzlistener20",
      "instance_port": 8080,
      "instance_protocol": "HTTP",
      "lb_port": 8080,
      "name": "rdzlistener20",
      "option": {
        "algorithm": "roundrobin",
        "certificate_id": "",
        "cookie_timeout": 110,
        "session_sticky": true,
        "ssl_ciphers": "",
        "ssl_protocols": "",
        "sticky_session_type": "insert",
        "tcp_draining": true,
        "tcp_draining_timeout": 7,
        "tcp_timeout": 0,
        "udp_timeout": 0,
        "instances": [
          "6345c832-274d-4f58-93e0-0af8ccb23be7"
        ]
      },
      "protocol": "HTTP"
    }
  ],
  "name": "rdzelb202",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_size": 1,
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "security_groups": [
    "e2c189d7-8935-4204-9b32-6284c7c940ce"
  ],
  "subnets": [
    "8acf1acc-e9d4-45e9-8d06-040ea2cb965f"
  ],
  "type": "Internal",
  "vpc_id": "bd811d77-5a3d-4880-8336-06c5a174f7b6"
}


response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "05c14f1f488744e48e6beeac19834cd3",
    "elb_option": {
      "elb_id": "05c14f1f488744e48e6beeac19834cd3",
      "generation": "classic",
      "healthcheck": [
        {
          "create_time": "2020-01-29 14:43:01",
          "healthcheck_connect_port": 80,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "47533d2a259a4a6283e80deb23ea610f",
          "listener_id": "be1559ed3a8d4c10b00e95ce7c930045",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-29 14:43:01"
        },
        {
          "create_time": "2020-01-29 14:43:01",
          "healthcheck_connect_port": 8080,
          "healthcheck_interval": 5,
          "healthcheck_protocol": "HTTP",
          "healthcheck_timeout": 10,
          "healthcheck_uri": "/",
          "healthy_threshold": 3,
          "id": "6f8cd20baf2a4552b221b1266573840f",
          "listener_id": "f6334bf551b34e608b9ed5d74d89d1f1",
          "unhealthy_threshold": 3,
          "update_time": "2020-01-29 14:43:01"
        }
      ],
      "listener": [
        {
          "backend_port": 80,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 100,
          "create_time": "2020-01-29 14:43:00",
          "description": "listener for rdzelb202 elb",
          "id": "be1559ed3a8d4c10b00e95ce7c930045",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "05c14f1f488744e48e6beeac19834cd3",
          "name": "rdzlistener10",
          "port": 80,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 5,
          "update_time": "2020-01-29 14:43:00"
        },
        {
          "backend_port": 8080,
          "backend_protocol": "HTTP",
          "certificates": [],
          "cookie_timeout": 110,
          "create_time": "2020-01-29 14:43:00",
          "description": "listener for rdzelb202 elb",
          "id": "f6334bf551b34e608b9ed5d74d89d1f1",
          "lb_algorithm": "roundrobin",
          "loadbalancer_id": "05c14f1f488744e48e6beeac19834cd3",
          "name": "rdzlistener20",
          "port": 8080,
          "protocol": "HTTP",
          "session_sticky": true,
          "status": "ACTIVE",
          "sticky_session_type": "insert",
          "tcp_draining": true,
          "tcp_draining_timeout": 7,
          "update_time": "2020-01-29 14:43:00"
        }
      ]
    }
  }
}


--------------------
====================================================
ENHANCED
====================================================
{
  "algorithm": "ROUND_ROBIN",
  "description": "string",
  "front_ip": "string",
  "health_check": [
    {
      "healthy_threshold": 0,
      "interval": 0,
      "method": "GET",
      "name": "string",
      "option": {
        "admin_state_up": true,
        "domain_name": "string",
        "expected_codes": "string"
      },
      "port": 0,
      "protocol": "HTTP",
      "target": "string",
      "timeout": 0
    }
  ],
  "instances": [
    {
      "id": "string",
      "listener_name": "string"
    }
  ],
  "listener": [
    {
      "lb_port": 0,
      "name": "string",
      "option": {
        "admin_state_up": true,
        "algorithm": "ROUND_ROBIN",
        "client_ca_tls_container_ref": [
          "string"
        ],
        "connection_limit": 0,
        "default_pool_id": "string",
        "default_tls_container_ref": "string",
        "description": true,
        "http2_enable": true,
        "instances": [
          "string"
        ],
        "session_cookie_name": "string",
        "session_persistence_timeout": 0,
        "session_type": "SOURCE_IP",
        "tls_ciphers_policy": "string"
      },
      "protocol": "HTTP",
      "weight": 0
    }
  ],
  "name": "string",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "string",
    "bandwidth_id": "string",
    "bandwidth_name": "string",
    "bandwidth_share_type": "string",
    "bandwidth_size": 0,
    "eip_type": "string",
    "ip_version": 4,
    "provider": "string",
    "vip_address": "string"
  },
  "subnets": [
    "string"
  ],
  "type": "Internal"
}
====================================================
création manuel ihm fe_create_classic_elb
list_elb:

{
  "action": "list_elbs",
  "result": [
    {
      "admin_state_up": true,
      "created_at": "2020-01-30T09:46:09",
      "description": "",
      "id": "df4b24d2-8ab2-405f-9332-d0027906a455",
      "listeners": [],
      "name": "rdzelb100",
      "operating_status": "ONLINE",
      "pools": [],
      "project_id": "a43d7085a38e44a7b1642755804d7ac3",
      "provider": "vlb",
      "provisioning_status": "ACTIVE",
      "tags": [],
      "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
      "updated_at": "2020-01-30T09:46:10",
      "vip_address": "10.10.0.86",
      "vip_port_id": "0ab05baa-27b0-45af-bdfd-75d9b6fc51fb",
      "vip_subnet_id": "94731884-0c1c-4204-85c1-3f3353d1ca43"
    }
  ]
}



====================================================
EXTERNAL
list elb

{
  "action": "list_elbs",
  "result": [
    {
      "admin_state_up": true,
      "created_at": "2020-01-30T13:36:11",
      "description": "rdz enh ext",
      "id": "017c7e5f-0a2b-4044-8afc-76a37cf54ceb",
      "listeners": [],
      "name": "rdzelb100",
      "operating_status": "ONLINE",
      "pools": [],
      "project_id": "a43d7085a38e44a7b1642755804d7ac3",
      "provider": "vlb",
      "provisioning_status": "ACTIVE",
      "tags": [],
      "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
      "updated_at": "2020-01-30T13:36:11",
      "vip_address": "10.10.0.79",
      "vip_port_id": "e8a80b8b-e20b-4c09-b34e-3e6821b284f3",
      "vip_subnet_id": "94731884-0c1c-4204-85c1-3f3353d1ca43"
    }
  ]
}
---------------
1) simple sans frontip

{
  "description": "rdz enh ext",
  "frontip": "",
  "health_check": [],
  "instances": [],
  "listener": [],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 10,
    "eip_type": "5_bgp",
    "ip_version": 4,
    "provider": "",
    "vip_address": "10.10.0.79",
"tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": ["94731884-0c1c-4204-85c1-3f3353d1ca43"],
  "type": "External"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "017c7e5f-0a2b-4044-8afc-76a37cf54ceb",
    "elb_option": {
      "backend_groups": [],
      "elb_id": "017c7e5f-0a2b-4044-8afc-76a37cf54ceb",
      "generation": "enhanced",
      "healthcheck": [],
      "listener": []
    }
  }
}

2) simple avec frontip

{
  "description": "rdz enh ext",
  "front_ip": "7c225e14-6532-4480-b4a8-6c5ee2a54007",
  "health_check": [],
  "instances": [],
  "listener": [],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 1,
    "eip_type": "5_bgp",
    "ip_version": 4,
    "provider": "vlb",
    "vip_address": "10.10.0.81",
"tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": ["94731884-0c1c-4204-85c1-3f3353d1ca43"],
  "type": "External"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "8fc44501-cd16-4940-bb6b-7aae422f05e2",
    "elb_option": {
      "backend_groups": [],
      "elb_id": "8fc44501-cd16-4940-bb6b-7aae422f05e2",
      "generation": "enhanced",
      "healthcheck": [],
      "listener": []
    }
  }
}

++++++
sans front_ip
{
  "description": "rdz enh ext",
  "front_ip": "",
  "health_check": [],
  "instances": [],
  "listener": [],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 1,
    "eip_type": "5_bgp",
    "ip_version": 4,
    "provider": "vlb",
    "vip_address": "10.10.0.81",
"tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": ["94731884-0c1c-4204-85c1-3f3353d1ca43"],
  "type": "External"
}

response:
{
  "action": "create_elb",
  "result": {
    "elb_id": "599baa7e-31e7-4e0f-847e-8b627e72f6a4",
    "elb_option": {
      "backend_groups": [],
      "elb_id": "599baa7e-31e7-4e0f-847e-8b627e72f6a4",
      "generation": "enhanced",
      "healthcheck": [],
      "listener": []
    }
  }
}

2) avec listener et healthcheck et backend servers

{
  "algorithm": "",
  "description": "rdz enh ext",
  "front_ip": "c41c0f8a-d912-457f-982a-95319914adce",
  "health_check": [
    {
      "healthy_threshold": 3,
      "interval": 3,
      "method": "GET",
      "name": "rdzhealth10",
      "option": {
        "admin_state_up": true,
        "domain_name": "",
        "expected_codes": ""
      },
      "port": 80,
      "protocol": "HTTP",
      "target": "/",
      "timeout": 10
    }
  ],
  "instances": [],
  "listener": [
    {
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "admin_state_up": true,
        "sni_container_refs": [],
        "algorithm": "ROUND_ROBIN",
        "client_ca_tls_container_ref": [],
        "connection_limit": 1,
        "default_pool_id": "",
        "default_tls_container_ref": "",
        "description": "",
        "http2_enable": true,
        "instances": [
          "037215ce-90d1-4a6e-bb25-d722a3c805bf",
          "06cc9a6b-ef73-4a04-b56e-a1296447ddf3"
        ],
        "session_cookie_name": "",
        "session_persistence_timeout": 10,
        "session_type": "SOURCE_IP",
        "tls_ciphers_policy": ""
      },
      "protocol": "HTTP",
      "weight": 10
    }
  ],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 1,
    "eip_type": "5_bgp",
    "ip_version": 4,
    "provider": "vlb",
    "vip_address": "10.10.0.81",
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": [
    "94731884-0c1c-4204-85c1-3f3353d1ca43"
  ],
  "type": "External"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "ac7ef552-3a67-4137-b708-6fb0442cb44c",
    "elb_option": {
      "backend_groups": [
        {
          "instances": [
            "037215ce-90d1-4a6e-bb25-d722a3c805bf",
            "06cc9a6b-ef73-4a04-b56e-a1296447ddf3"
          ],
          "listener_id": "7cdf14a4-cc5b-4451-86ed-1e16a2a89468",
          "listener_name": "rdzlistener10",
          "pool_id": "b80e7438-a1b9-49f6-a751-c0f98b4d32e2",
          "port": 80,
          "protocol": "HTTP",
          "weight": 10
        }
      ],
      "elb_id": "ac7ef552-3a67-4137-b708-6fb0442cb44c",
      "generation": "enhanced",
      "healthcheck": [
        {
          "admin_state_up": true,
          "delay": 3,
          "domain_name": null,
          "expected_codes": "2xx,3xx,4xx",
          "http_method": "GET",
          "id": "5e599b20-6977-400e-8eea-4a475bd8e488",
          "max_retries": 3,
          "monitor_port": 80,
          "name": "rdzelb100-healthcheck-0",
          "pools": [
            {
              "id": "b80e7438-a1b9-49f6-a751-c0f98b4d32e2"
            }
          ],
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "timeout": 10,
          "type": "HTTP",
          "url_path": "/"
        }
      ],
      "listener": [
        {
          "admin_state_up": true,
          "client_ca_tls_container_ref": null,
          "connection_limit": -1,
          "created_at": "2020-02-03T08:12:02",
          "default_pool_id": null,
          "default_tls_container_ref": null,
          "description": "",
          "http2_enable": true,
          "id": "7cdf14a4-cc5b-4451-86ed-1e16a2a89468",
          "insert_headers": {},
          "loadbalancers": [
            {
              "id": "ac7ef552-3a67-4137-b708-6fb0442cb44c"
            }
          ],
          "name": "rdzlistener10",
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "protocol": "HTTP",
          "protocol_port": 80,
          "sni_container_refs": [],
          "tags": [],
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tls_ciphers_policy": null,
          "updated_at": "2020-02-03T08:12:02"
        }
      ]
    }
  }
}

-------------


====================================================

INTERNAL

1) simple avec vip_address:

{
  "description": "rdz enh ext",
  "front_ip": "",
  "health_check": [],
  "instances": [],
  "listener": [],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_id": "",
    "bandwidth_name": "",
    "bandwidth_share_type": "",
    "bandwidth_size": 0,
    "eip_type": "",
    "ip_version": 4,
    "provider": "",
    "vip_address": "10.10.0.77",
"tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": ["94731884-0c1c-4204-85c1-3f3353d1ca43"],
  "type": "Internal"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "57c88f0d-fff0-4ce3-9996-8319c0414cdc",
    "elb_option": {
      "backend_groups": [],
      "elb_id": "57c88f0d-fff0-4ce3-9996-8319c0414cdc",
      "generation": "enhanced",
      "healthcheck": [],
      "listener": []
    }
  }
}
+++

sans vip_address:

{
  "description": "rdz enh ext",
  "front_ip": "",
  "health_check": [],
  "instances": [],
  "listener": [],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "",
    "bandwidth_id": "",
    "bandwidth_name": "",
    "bandwidth_share_type": "",
    "bandwidth_size": 0,
    "eip_type": "",
    "ip_version": 4,
    "provider": "",
    "vip_address": "",
"tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": ["94731884-0c1c-4204-85c1-3f3353d1ca43"],
  "type": "Internal"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "954929ff-3753-4e6d-bac9-f4438a161458",
    "elb_option": {
      "backend_groups": [],
      "elb_id": "954929ff-3753-4e6d-bac9-f4438a161458",
      "generation": "enhanced",
      "healthcheck": [],
      "listener": []
    }
  }
}

2) avec listener et healthcheck et backendservers

{
  "algorithm": "",
  "description": "rdz enh ext",
  "front_ip": "",
  "health_check": [
    {
      "healthy_threshold": 3,
      "interval": 3,
      "method": "GET",
      "name": "rdzhealth10",
      "option": {
        "admin_state_up": true,
        "domain_name": "",
        "expected_codes": ""
      },
      "port": 80,
      "protocol": "HTTP",
      "target": "/",
      "timeout": 10
    }
  ],
  "instances": [],
  "listener": [
    {
      "lb_port": 80,
      "name": "rdzlistener10",
      "option": {
        "admin_state_up": true,
        "sni_container_refs": [],
        "algorithm": "ROUND_ROBIN",
        "client_ca_tls_container_ref": [],
        "connection_limit": 1,
        "default_pool_id": "",
        "default_tls_container_ref": "",
        "description": "",
        "http2_enable": true,
        "instances": [
          "037215ce-90d1-4a6e-bb25-d722a3c805bf",
          "06cc9a6b-ef73-4a04-b56e-a1296447ddf3"
        ],
        "session_cookie_name": "",
        "session_persistence_timeout": 10,
        "session_type": "SOURCE_IP",
        "tls_ciphers_policy": ""
      },
      "protocol": "HTTP",
      "weight": 10
    }
  ],
  "name": "rdzelb100",
  "option": {
    "admin_state_up": true,
    "bandwidth_charge_mode": "traffic",
    "bandwidth_id": "",
    "bandwidth_name": "rdzbwidth10",
    "bandwidth_share_type": "PER",
    "bandwidth_size": 1,
    "eip_type": "",
    "ip_version": 4,
    "provider": "vlb",
    "vip_address": "10.10.0.82",
    "tenantid": "a43d7085a38e44a7b1642755804d7ac3"
  },
  "subnets": [
    "94731884-0c1c-4204-85c1-3f3353d1ca43"
  ],
  "type": "Internal"
}

response:

{
  "action": "create_elb",
  "result": {
    "elb_id": "579b8151-76b0-4a63-bbe9-6e07aaf116be",
    "elb_option": {
      "backend_groups": [
        {
          "instances": [
            "037215ce-90d1-4a6e-bb25-d722a3c805bf",
            "06cc9a6b-ef73-4a04-b56e-a1296447ddf3"
          ],
          "listener_id": "d4671928-0f28-4ffa-b383-3a30528e2b49",
          "listener_name": "rdzlistener10",
          "pool_id": "1866034a-6351-46f0-a7b2-5e1bf73d1a86",
          "port": 80,
          "protocol": "HTTP",
          "weight": 10
        }
      ],
      "elb_id": "579b8151-76b0-4a63-bbe9-6e07aaf116be",
      "generation": "enhanced",
      "healthcheck": [
        {
          "admin_state_up": true,
          "delay": 3,
          "domain_name": null,
          "expected_codes": "2xx,3xx,4xx",
          "http_method": "GET",
          "id": "a45888c7-c6a5-418a-90c2-149b3af18327",
          "max_retries": 3,
          "monitor_port": 80,
          "name": "rdzelb100-healthcheck-0",
          "pools": [
            {
              "id": "1866034a-6351-46f0-a7b2-5e1bf73d1a86"
            }
          ],
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "timeout": 10,
          "type": "HTTP",
          "url_path": "/"
        }
      ],
      "listener": [
        {
          "admin_state_up": true,
          "client_ca_tls_container_ref": null,
          "connection_limit": -1,
          "created_at": "2020-02-03T08:32:53",
          "default_pool_id": null,
          "default_tls_container_ref": null,
          "description": "",
          "http2_enable": true,
          "id": "d4671928-0f28-4ffa-b383-3a30528e2b49",
          "insert_headers": {},
          "loadbalancers": [
            {
              "id": "579b8151-76b0-4a63-bbe9-6e07aaf116be"
            }
          ],
          "name": "rdzlistener10",
          "project_id": "a43d7085a38e44a7b1642755804d7ac3",
          "protocol": "HTTP",
          "protocol_port": 80,
          "sni_container_refs": [],
          "tags": [],
          "tenant_id": "a43d7085a38e44a7b1642755804d7ac3",
          "tls_ciphers_policy": null,
          "updated_at": "2020-02-03T08:32:53"
        }
      ]
    }
  }
}





One vm


appropriation:
    account: prologue
    user: prologue
agreement:
    name: '334'
    responder: prologue
    action:
        -
            broker: ''
    compute:
        ubuntu:
            architecture: x64
            flavor: s1.medium
    image:
        ubuntu:
            login: cloud
            os: ubuntu
            agent: none
            src_image: b12e6a91-eeaf-4f01-843d-ae0cffbf9341
    keypair:
        ubuntu:
            reference: ubuntu_4eb20df6-3eb6-435a-b520-599da92ffce9
    port:
        e8acfb38-7767-471d-a040-ed84b4f10295:
            name-label: uicvq7zcrceqbra
            protocol: tcp
            from: 22
            to: 22
            direction: in
            range: 0.0.0.0/0
        cba9bda4-a488-4fbd-90cc-fc51392d22df:
            name-label: uiccp42gsmzodda
            protocol: tcp
            from: 80
            to: 80
            direction: in
            range: 0.0.0.0/0
    firewall:
        ubuntu:
            reference: dfd39d57-9eff-40d4-91a6-bdf837f75f71
            port:
                - e8acfb38-7767-471d-a040-ed84b4f10295
                - cba9bda4-a488-4fbd-90cc-fc51392d22df
    subnet:
        ubuntu:
            reference: 8acf1acc-e9d4-45e9-8d06-040ea2cb965f
            cidrblock: 10.10.0.0/24
            zone: eu-west-0b
    network:
        ubuntu:
            placement: ubuntu
            subnet:
                - ubuntu
            reference: bd811d77-5a3d-4880-8336-06c5a174f7b6
    userdata:
        ubuntu:
            script:
                - 'eval "`echo bWtkaXIgLXAgL3Zhci9saWIvdWljCm1rZGlyIC1wIC92YXIvbGliL3VpYy1hZ2VudC9leGVjLWluc3RydWN0aW9ucwpjZCAvdmFyL2xpYi91aWMtYWdlbnQvZXhlYy1pbnN0cnVjdGlvbnMKCgojIEdMT0JBTCBWQVJJQUJMRVMKY2F0ID4+IC92YXIvbGliL3VpYy9tZXRhZGF0YSA8PCdVSUNNRVRBREFUQScKZXhwb3J0IHVpY19hY2NvdW50X25hbWU9InByb2xvZ3VlIgpleHBvcnQgdWljX3Byb3ZpZGVyPSJmbGV4aWJsZWVuZ2luZSIKZXhwb3J0IHVpY19yZWdpb249ImV1LXdlc3QtMCIKZXhwb3J0IHVpY19hcHBsaWNhdGlvbl9uYW1lPSJVYnVudHUgMTYuMDQgeDY0IgpleHBvcnQgdWljX25vZGVfbmFtZT0idWJ1bnR1IgpVSUNNRVRBREFUQQoKLiAvdmFyL2xpYi91aWMvbWV0YWRhdGEKCgojIFNDUklQVCBWQVJJQUJMRVMKCgojIFBSRURFRklORUQgU0NSSVBUCgoKIyBBRERJVElPTkFMIFNDUklQVApjYXQgPiB1aWNfdXNlcmRhdGFfYWRkaXRpb25hbF9zY3JpcHQgPDwnVUlDMkVPRicKd2dldCAtLXRpbWVvdXQgMTAgLS10cmllcz0yIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS91c2VpdGNsb3VkL3NjcmlwdHMvbWFzdGVyL2FwYWNoZS9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoCmJhc2ggLi9hcGFjaGUyX3BocDdfdWJ1bnR1LnNoClVJQzJFT0YKCgojIE9SQ0hFU1RSQVRJT04gU0NSSVBUUwoKCiMgU0NSSVBUUyBFWEVDVVRJT04KCiMgVUJVTlRVIE9OIEZMRVhJQkxFIEVOR0lORQpzdWRvIHN5c3RlbWN0bCBzdG9wIGFwdC1kYWlseS5zZXJ2aWNlCgpiYXNoIC4vdWljX3VzZXJkYXRhX2FkZGl0aW9uYWxfc2NyaXB0Cg== | base64 -d`"'
    placement:
        ubuntu:
            region: eu-west-0
            option.projectid: a43d7085a38e44a7b1642755804d7ac3
    node:
        ubuntu:
            access: public
            provider: flexibleengine
            label: rdzubuntu100
            tenant: flexibleengine
            option.direct_access: 'false'
            option:
                zone: eu-west-0b
            image: ubuntu
            compute: ubuntu
            keypair: ubuntu
            firewall:
                - ubuntu
            subnet:
                - ubuntu
            network: ubuntu
            userdata: ubuntu
    sort:
        strategy: ordered
        order:
            - ubuntu
