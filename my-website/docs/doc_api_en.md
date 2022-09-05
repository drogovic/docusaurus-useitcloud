---
title: API
description: API documentation
sidebar_position: 4
---

## Generalities

The API exposed by Use IT Cloud is avalable under the OpenAPI Specification using [Swagger](https://swagger.io/)

### API endpoint

In a server running the Use IT Cloud API, the endpoint of the API will be available on the following base URL e.g:

```md
https://{ the Use IT Cloud server hostname}/api/{api version}/
```

### API Versions

The API version is embedded into the URL. The currently active one is v1.0’.

### General URL Format

API URLs have the following general format:

```md
https://{api_server}/{api_version}/{resource}/{object_id}?action={get_request_parameters}
```

Here is a list of the possible URL formats relative to the base URL (https://{uic_server}/api/{api_version}):

- /{**resource**}/
  - These URLs usually point to a list of resources like /service/.
- /{**resource**}/{**object_id**}/
  - These URLs point to a single resource from a list of resources, for example a single service URL can be: /service/6e5ceaaa-0cf8-417a-bf47-53e56d4fcaaa/
- /{**resource**}/{**object_id**}?**action**={**action_name**}
  - Some objects have actions. The name of the action is specified in the ‘action=’ GET parameter. For example, a service object has a start action which is called on the following URL: /service/6e5ceaaa-0cf8-417a-bf47-53e56d4fcaaa?action=start


### Authentication

The API supports the following authentication methods:

- HTTP Basic Auth

HTTP Basic Authentication is done with the Authorization header. The value of the header is Basic base64_encode({user_email}: {password}). For example, a user with username admin and password pass123 results in a value of admin@example.fr:pass123, which when encoded in Base64 would result in the following header:

Authorization: Basic dXNlcm5hbWU6cGFzczEyMw==

See [RFC2617](http://www.rfc-base.org/rfc-2617.html) for more detailed discussion of HTTP Basic Authentication.

### Data Format

The API supports both the JSON and YAML data formats. By default, JSON is used. The request format is specified using the Content-Type header and is required for operations that have a request body. The response format can be specified in requests using the Accept header. The response contains a Content-Type header specifying the data format returned. The following table summarizes the request and response headers concerning data format:

 Header name  |   Specified in Request   | Specified in Response
--------------|--------------------------|--------------------------
 Content-Type | applies to request body  | applies to response body
  Accept      | applies to response body | not applicable


  The values which can be used for data format headers are:

   Encoding   |  Header value
--------------|-------------------------
   JSON       | application/json or \*/\*

You can also use a URI parameter? format=json to specify the content type of the response, when sending a GET request. This is useful for querying the API manually (via web browser) and should not be used when sending requests programmatically. In case both the Content-Type and URI parameter are used, the URI parameter has precedence. In case there are conflicting URI parameters, the last specified parameter takes precedence.
In case of **application/json** is specified in an Accept header, JSON is returned. If the Accept header contains both **\*/\*** or **application/json**, the **\*/\*** is ignored and the more specific content type is used.


### Request Methods

The API uses different HTTP/HTTPS request methods for different types of operations. The following table specifies the meanings of HTTP/HTTPS methods, which can be used by API clients:

   Method     |  Description
--------------|-------------------------
   GET        | Retrieve a resource or a list of resources.
   PUT        | Update an existing resource. PUT implies an idempotent action (a request, which when repeated with the same arguments will always yield the same result).
   POST       | Create a resource, or do an action on an object (like do start action on a server). POST is used for non-idempotent request (requests, which may have different results if repeated multiple times, even if the input data is the same).
   DELETE     | Delete a resource.


### Response Status Codes

The API uses the standard HTTP/HTTPS status code classes, where a code from 200 to 299 signifies success. Request errors have status codes between 400 and 499, and server-side errors have codes between 500 and 599. The following status codes are returned by the API:

#### Success Status Codes:


   Status     |  Description
--------------|-------------------------
   200        | OK. Successful request.
   201        | Object Created. This request is used for calls which create new objects, such as create drive or create server. The Location response header contains the URI of the newly created object.
   202       | Accepted. This header is used for long-running or asynchronous operations such as starting a server or cloning a drive. The header also implies that the request may not succeed and may be cancelled
   204     | No Content. The request was successful and there is no content in response body. This status is used for successful DELETE requests. Clients should be aware to not parse the body as it is empty and is not a valid JSON or INI document.

#### Request Error Status Codes

   Status     |  Description
--------------|-------------------------
   400        | Bad Request. This status means that there is an error in the request. The request error may be data format error (non-valid JSON or INI) or an invalid value.
   401        | Unauthorized. The provided credentials are incorrect or missing. This response status is normal part of digest authentication in which case, the response will contain WWW-Authenticate header with an authentication challenge.
   402       | Payment Required. This error means there are not enough funds in the account to complete action. It occurs when trying to buy subscription without having enough funds in the account, or when trying to start a server without having enough funds for burst usage of 5 days.
   403     | Forbidden. The provided credentials are correct but the user is not permitted to complete the action. This status is used for either “permission” or “operation not allowed” error.
   404      | Not Found. The requested object does not exist. This error occurs when requesting non-existing resource. The resource may have never been created, or it may be deleted.
   405       | Method Not Allowed. This error occurs, when using incorrect HTTP method on an URL. For example, DELETE requests are not allowed on /profile/ URL, and will return a 405 status.
   406       | Not Acceptable. This error occurs when the content type requested through the Accept header is not supported by the API. The content types supported by the API are application/json, and */*, which defaults to application/json. If the Accept header of the request does not contain any of those content types, a 406 status will be returned.

#### System Error Status Code

   Status     |  Description
--------------|-------------------------
   500        | Internal Server Error. This status means a system error has occurred. Please contact support if you encounter such an error.
   503        | Service Unavailable. This status means that the system temporarily cannot fulfil a request. This status is returned for concurrent updates, when the client makes multiple concurrent requests which try to update the same values, or when the system is out of capacity.

#### Permitted characters

The API accepts Unicode characters, with the recommended charset being UTF-8. The only special case is “**~**”, which is not accepted.

## Deploy

The provisioning under Use IT Cloud is performed with the creation of an agreement resource.

### Agreement

- **CREATE**

 Method     |  POST
------------|------------------------------------
Description | Create a deployment
Request     |  ``` POST https://{api_server}/api/{api_version}/agreeement/ Content-Type : application/yaml```
Request body  |  The Use IT Cloud blueprint/template. The body must be a valid uic template /blueprint-sections/
Successful Response (Status 201) | The json representation of agreement creation response  <br/>```{ "action": "create", "result": "success", "uuid": "c091698f-caf6-4b81-b74e-3ffcd944cb37"}```

- **GET**

 Method     |  GET
------------|------------------------------------
Description | Get an agreement of a deployment.
Request     | ```GET https://{api_server}/api/{api_version}/agreeement/{uuid}```
Successful Response (Status 200) | ``` {"services": [{"serviceid": "d42da5ad-670f-4d59-9268-2df9c9910df7", "status": "10:deployed"}], "uuid": "3b5805cf-1174-482b-bdab-eb33af4c204d"}```

- **LIST**

 Method     |  GET
------------|------------------------------------
Description | List all deployments agreements.
Request     | ```GET https://{api_server}/api/{api_version}/agreeement/```
Successful Response (Status 200) | ```{"agreement": [{"services": [{"serviceid": "d42da5ad-670f-4d59-9268-2df9c9910df7", "status": "10:deployed"}], "uuid": "3b5805cf-1174-482b-bdab-eb33af4c204d"},{"services": [{"serviceid": "c42da5ad-670f-4d59-9268-2df9c9910df2", "status": "10:deployed"}], "uuid": "8b5805cf-1174-482b-bdab-eb33af4c204l"}]}```


- **DELETE**

 Method     |  DELETE
------------|------------------------------------
Description | Delete an agreement.
Request     | ```DELETE https://{api_server}/api/{api_version}/agreement/{uuid}```
Successful Response (Status 200) | ```{"action": "delete","result": "succeeded"}```


## Manage

The service and server resources are used to manage agreements deployments.

### Service

In the Use IT Cloud terminology; a service resource represents the collection of provisioned cloud resources described in the provisioning template.


- **GET**

 Method     |  GET
------------|------------------------------------
Description | Get a service.
Request     | ```GET https://{api_server}/api/{api_version}/service/{uuid}```
Successful Response (Status 200) | ```{"servers": [{"message": "succeeded", "name": " appA ", "status": "1:running", "uuid": "42ed8386-5159-4327-88cf-227dc3b1dac3"}], "status": "10:deployed", "uuid": "d42da5ad-670f-4d59-9268-2df9c9910df7"}```

- **LIST**

 Method     |  GET
------------|------------------------------------
Description | List the deployed services.
Request     | ```GET https://{api_server}/api/{api_version}/service/```
Successful Response (Status 200) | ```{"service": [{"servers": [{"name": " appA", "status": "1:running", "uuid": "42ed8386-5159-4327-88cf-227dc3b1dac3"}], "status": "10:deployed", "uuid": "d42da5ad-670f-4d59-9268-2df9c9910df7"},{"servers": [{"name": "bdd", "status": "1: running", "uuid": "82ed8386-9159-4727-88cf-227dc3b1dal4"}], "status": "10:deployed", "uuid": "e53da5ad-670f-4d59-9268-2df9c9910lf2"}]}```

- **DELETE**

 Method     |  DELETE
------------|------------------------------------
Description | Delete a service.
Request     | ```DELETE https://{api_server}/api/{api_version}/service/{uuid}```
Successful Response (Status 200) | ```{"action": "delete","result": "succeeded"}```

- **ACTIONS**

 Method     |  POST
------------|------------------------------------
Description | Perform a set of action on a deployed service.
Request     | ```POST https://{api_server}/api/{api_version}/service/{uuid}?action=actionname```
Successful Response (Status 200) | ```{"action": "stop","result": "succeeded"}```
Allowed Actions | ```stop, resume, restart, destroy```


### Server

In the Use IT Cloud terminology; a server resource represents a virtual machine.

- **GET**

 Method     |  GET
------------|------------------------------------
Description | Get a server.
Request     | ```GET https://{api_server}/api/{api_version}/server/{uuid}```
Successful Response (Status 200) | see below a servers fields response

Example response

```
{
  "firewallpolicy": [
    {
      "action": "allow",
      "direction": "in",
      "from": "8286",
      "name": "uicagent",
      "protocol": "tcp",
      "range": "213.163.179.240/32",
      "to": "8286"
    },
    {
      "action": "allow",
      "direction": "in",
      "from": "80",
      "name": "http",
      "protocol": "tcp",
      "range": "0.0.0.0/0",
      "to": "80"
    },
    {
      "action": "allow",
      "direction": "in",
      "from": "22",
      "name": "ssh",
      "protocol": "tcp",
      "range": "0.0.0.0/0",
      "to": "22"
    }
  ],
  "keypair": "keyA",
  "login": "ubuntu",
  "name": "appA",
  "option": {},
  "os": "ubuntu",
  "password": "",
  "network": "vpc-b2b37ad4",
  "privateip": "10.0.30.83",
  "provider": "amazonaws",
  "publicip": "52.3.235.93",
  "status": "1:running",
   "subnet": { "subnetA": { "id": "subnet-0ce46769",  "option": {},  "range": "10.0.0.0/24" } },
  "tenant": "tenant",
  "uuid": "42ed8386-5159-4327-88cf-227dc3b1dac3",
  "volume": {},
  "zone": "us-east-1"
}

```

#### **Actions**

 Method     |  POST
------------|------------------------------------
Description | Perform a set of action on a deployed server.
Request     | ```POST https://{api_server}/api/{api_version}/service/{uuid}?action=actionname```
Successful Response (Status 200) | {"action": "destroy","result": "succeeded"}
Allowed Actions |resume, restart, stop, snapshot, destroy, refresh, resize, backup, rebuild, runcommand, get_keypair, delete_keypair, add_public_ip, remove_public_ip, console

Allowed action and parameters per provider

- **Stop**
  - Description: stop a virtual machine.
  - body request Parameters: empty
  - cloud providers: all
- **resume**
  - Description: start a virtual machine after a stop action.
  - body request Parameters: empty
  - cloud providers: all
- **restart**
  - Description: restart a virtual machine.
  - body request Parameters: empty
  - cloud providers: all
- **destroy**
  - Description: delete a virtual machine.
  - body request Parameters: empty
  - cloud providers: all
- **refresh**
  - Description: update some data of a virtual machine.
  - body request Parameters: empty
  - cloud providers: all
- **get_keypair**
  - Description: get the keypair of a virtual machine.
  - body request Parameters: empty
  - cloud providers: all except VMware vSphere and VMware vCloud.
- **delete_keypair**
  - Description: delete the keypair of a virtual machine.
  - body request Parameters: empty
  - cloud providers: all except VMware vSphere and VMware vCloud
- **resize**
  - Description: delete the keypair of a virtual machine.
  - body request Parameters:
    - **flavor**:  string; the flavor id; required if provider is amazonaws, microsoftazure, openstack, flexibleengine, cloudwatt and optional for VMware vCloud and VMware vSphere.
    - **confirm_resize**:  boolean; optional, available anly for openstack, cloudwatt and flexibleengine.
    - **cpu**: integer; available only for VMware vCloud and VMware vSphere; optional if flavor is provided.
    - **memory**: integer; available only for VMware vCloud and VMware vSphere; optional if flavor is provided; value on MB.
    - **disk**: integer; available only for VMware vCloud and VMware vSphere; optional if flavor is provided; size on MB.
  - cloud providers: all
- **snapshot**
  - Description: Make a snapshot of the virtual machine.
  - body request Parameters:
    - **snapshot_name**: string; required for amazonaws, microsoftazure, openstack cloudwatt and flexibleengine.
    - **description**: string; optional available for amazonaws, microsoftazure, openstack cloudwatt and flexibleengine.
    - **metadata**: json key value; optional available for amazonaws, openstack cloudwatt and flexibleengine.
    - **block_device_mappings**: json key value; optional available for amazonaws, openstack cloudwatt and flexibleengine.
    - **destination_container_name**: string; optional available for microsoftazure.
    - **overwrite_vhds**: boolean; optional available for microsoftazure.
  - cloud providers: all

- **add_public_ip**
  - Description: associate a public ip for a virtual machine.
  - body request Parameters:
    - **public_ip**: string; required for amazonaws.
    - **allocation_id**: string, is required for EC2-VPC; available for amazonaws.
    - **type**: string; available for amazonaws;  values “vpc|standard”,.
    - **nic_name**: string; available for microsoftazure.
    - **public_ip_name**: string; available for microsoftazure.
    - **allocation_method**: string; available for microsoftazure; values “static| dynamic”
    - **public_ip_id**: string; available for openstack, cloudwatt and flexibleengine.
    - **public_ip_address**: string; available for openstack, cloudwatt and flexibleengine; it is optional.
  - cloud providers: all except VMware vSphere and VMware vCloud.

- **remove_public_ip**
  - Description: disassociate a public ip from a virtual machine.
  - body request Parameters:
    - **release**: string; optional, available for amazonaws.
  - cloud providers: all except VMware vSphere and VMware vCloud.

## Inventory

The provider resource is used for the global management of cloud provider resources.

### Provider

In the Use IT Cloud terminology, a provider resource is used to setup the credentials of each supported cloud provider under the Use IT Cloud platform. It is used to manage the cloud provider resources.


- **LIST**

 Method     |  GET
------------|------------------------------------
Description | List the provider tenants.
Request     | ```GET https://{api_server}/api/{api_version}/provider/```   It is also possible to filter by provider  ```GET https://{api_server}/api/{api_version}/provider/{providername}```
Successful Response (Status 200) | see below a servers fields response
Provider name allowed values | amazonaws, microsoftazure, vSphere, vCloud, openstack, cloudwatt, flexibleengine, googlecloud.

#### **Actions**

 Method     |  POST
------------|------------------------------------
Description | To manage cloud provider’s resources a set of actions are available.
Request     | ```https://{api_server}/api/{api_version}/provider/{providername}/{uuid}?action=actionname```
Provider name allowed values | amazonaws, microsoftazure, vSphere, vCloud, openstack, cloudwatt, flexibleengine, googlecloud.

Allowed action and parameters per provider

- **list_flavors**
  - Description: List available flavors.
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine
      - **body not required** : for openstack, cloudwatt
      - **project_id**: string; available for googlecloud
      - **zone**: string; required,  available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **flavor**: string; available for googlecloud
  - cloud providers: all Cloud providers except vSphere, vCloud.

- **list_avzone**
  - Description: List availability zones
  - body request parameters:
      - **region**: string; required, available for amazonaws
  - cloud providers: amazonaws.

- **list_regions**
  - Description: List available regions
  - body request parameters:
      - **body not required**: available for amazonaws, microsoftazure, googlecloud
          - **googlecloud**:
              - **project_id**: string;
              - **max_result**: string;
              - **page_token**: string;
              - **region_name**: string;
  - cloud providers: amazonaws, microsoftazure, googlecloud.

- **list_volumes**
  - Description: List volumes, block storages
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud, openstack, cloudwatt
      - **region**: string; required, available for amazonaws, flexibleengine
      - **body not required**: available for microsoftazure
      - **volume_id**: string; available for openstack, cloudwatt
      - **project_id**: string; available for googlecloud
      - **zone**: string; required, available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **disk_name**: string; available for googlecloud
      - **disk**: string; if no disk_name,  available for googlecloud
      - **volume**: string; if no disk/disk_name,  available for googlecloud
  - cloud providers: all Cloud providers except vSphere.

- **list_instances**
  - Description: List virtual machines
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt
      - **body not required**: available for microsoftazure
      - **max_result**: string; available for flexibleengine, openstack, cloudwatt
      - **page_token**: string; available for flexibleengine, openstack, cloudwatt
      - **detailed**: boolean; available for flexibleengine
      - **filter**: string; available for openstack, cloudwatt
      - **filters**: string; available for vsphere
      - **uic**: string; available for vsphere
      - **interval**: string; available for vsphere
      - **with_monitoring**: string; available for vsphere
      - **details**: string; available for vsphere
      - **project_id**: string;required, available for googlecloud
      - **zone**: string;required, available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **instance_name**: string; available for googlecloud
  - cloud providers: all Cloud providers.

- **list_private_images**
  - Description: List private images
  - body request parameters:
      - **region**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt
      - **image_id**: string; available for amazonaws
      - **catalog**: string; required, available for vcloud
      - **details**: boolean; available for vcloud
      - **body not required**: available for vsphere
      - **project_id**: string; available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **image_name**: string; available for googlecloud
      - **image**: string; if not image_name, available for googlecloud
  - cloud providers: all Cloud providers except microsoftazure.

- **list_images**
  - Description: List available images
  - body request parameters:
      - **catalog**: string; required, available for vCloud ex: "Linux"
      - **region**: string; required, available for openstack, cloudwatt, flexibleengine
  - cloud providers: openstack, cloudwatt, vCloud, flexibleengine.

- **list_networks**
  - Description: List virtual networks
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **limit**: string; available for flexibleengine
      - **marker**: string; available for flexibleengine
      - **name**: string; available for flexibleengine
      - **vnet_id**: string; avalaible for openstack, cloudwatt
      - **body not required**: available for vsphere
      - **project_id**: string; available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **vpc**: string; available for googlecloud
      - **vnet**: string; if not vpc, available for googlecloud
  - cloud providers: all Cloud providers.

- **list_subnets**
  - Description: List subnets under a virtual network
  - body request parameters:
      - **network_name**: string; required, available for microsoftazure
      - **resource_group_name**: string; required, available for microsoftazure
      - **region**: string; required, available for openstack, cloudwatt, flexibleengine, googlecloud
      - **vnet_id**: string; required if not subnet_id, available for openstack, cloudwatt
      - **vpc_id**: string;  required for flexibleengine
      - **subnet_id**: string; required if not vnet_id, available for openstack, cloudwatt
      - **limit**: string;  available for flexibleengine
      - **marker**: string;  available for flexibleengine
      - **name**: string;  available for flexibleengine
      - **project_id**: string; available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **subnet_name**: string; available for googlecloud
  - cloud providers: microsoftazure, openstack, cloudwatt, flexibleengine, googlecloud.

- **list_placement_groups**
  - Description: List placement group
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws.

- **list_gateways**
  - Description: List gateways
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws
  - cloud providers: amazonaws, vCloud.

- **list_keypairs**
  - Description: List keypairs
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **security_group_id**: string; available for flexibleengine
      - **body request parameters are not required**: available for googlecloud
  - cloud providers: all Cloud providers except vSphere, vCloud.

- **list_public_ips**
  - Description: List public ips
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, googlecloud
      - **filter**: string; required, available for amazonaws
      - **available**: boolean; available for flexibleengine
      - **project_id**: string; available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **address**: string; available for googlecloud
  - cloud providers: amazonaws, microsoftazure, flexibleengine, googlecloud.

- **list_firewalls**
  - Description: List firewalls
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **gateway_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **security_group_id**: string; available for flexibleengine, openstack, cloudwatt
      - **limit**: string; available for flexibleengine
      - **marker**: string; available for flexibleengine
      - **project_id**: string; available for googlecloud
      - **max_result**: string; available for googlecloud
      - **page_token**: string; available for googlecloud
      - **firewall**: string; available for googlecloud
  - cloud providers: all Cloud providers except vSphere.

- **list_elbs**
  - Description: List load balancers
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_asg**
  - Description: List autoscaling groups
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_roles**
  - Description: List roles
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_sns_topics**
  - Description: List sns topics
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_lcs**
  - Description: List launch configurations
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_metrics**
  - Description: List monitoring metrics
  - body request parameters:
      - **region**: string; required
      - **metric_name**: string; required
      - **name_space**: string; required
  - cloud providers: amazonaws

- **list_alarms**
  - Description: List alarms
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_datacenters**
  - Description: List datacenters
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_datastores**
  - Description: List datastores
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_disk_types**
  - Description: List disk types
  - body request parameters:
      - **project_id**: string;
      - **zone**: string; required
      - **max_result**: string;
      - **page_token**: string;
      - **disk_type**: string;
  - cloud providers: googlecloud

- **list_disks**
  - Description: List disks
  - body request parameters:
      - **project_id**: string;
      - **zone**: string; required
      - **max_result**: string;
      - **page_token**: string;
      - **disk_name**: string;
      - **disk**: string; if no disk_name
      - **volume**: string; if no disk/disk_name
  - cloud providers: googlecloud

- **list_hostservers**
  - Description: List host servers
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_resourcepools**
  - Description: List resource pool
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_clusters**
  - Description: List clusters
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_folders**
  - Description: List folders
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_portgroups**
  - Description: List port groups
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_vswitchs**
  - Description: List vswitchs
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vSphere

- **list_catalogs**
  - Description: List catalogs
  - body request parameters:
      - **vdc_name**: string; required
  - cloud providers: vMware vCloud

- **list_vdcs**
  - Description: List virtual datacenters
  - body request parameters:
      - **vdc_name**: string; required
  - cloud providers: vMware vCloud

- **list_nat_rules**
  - Description: List nat rules
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required
  - cloud providers: vMware vCloud

- **list_affinity_rules**
  - Description: List affinity rules
  - body request parameters:
      - **vdc_name**: string; required
  - cloud providers: vMware vCloud

- **list_load_balancer_monitors**
  - Description: List load balancer monitors
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; optional if gateway_id is defined
      - **gateway_id**: string; optional if gateway_name is defined
      - **monitor_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_load_balancer_pools**
  - Description: List load balancer pools
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; optional if gateway_id is defined
      - **gateway_id**: string; optional if gateway_name is defined
      - **pool_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_load_balancer_application_profiles**
  - Description: List load balancer application profiles
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; optional if gateway_id is defined
      - **gateway_id**: string; optional if gateway_name is defined
  - cloud providers: vMware vCloud with NSX

- **list_load_balancer_application_rules**
  - Description: List load balancer application rules
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; optional if gateway_id is defined
      - **gateway_id**: string; optional if gateway_name is defined
      - **application_rule_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_load_balancer_virtual_servers**
  - Description: List load balancer virtual servers
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; optional if gateway_id is defined
      - **gateway_id**: string; optional if gateway_name is defined
      - **virtual_server_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_layer2_distributed_firewalls**
  - Description: List layer2 distributed firewalls
  - body request parameters:
      - **vdc_name**: string; required
      - **organization_name**: string; required
      - **vdc_id**: string; optional
      - **organization_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_layer3_distributed_firewalls**
  - Description: List layer3 distributed firewalls
  - body request parameters:
      - **vdc_name**: string; required
      - **organization_name**: string; required
      - **vdc_id**: string; optional
      - **organization_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_global_distributed_firewalls**
  - Description: List global distributed firewalls
  - body request parameters:
      - **vdc_name**: string; required
      - **organization_name**: string; required
      - **vdc_id**: string; optional
      - **organization_id**: string; optional
  - cloud providers: vMware vCloud with NSX

- **list_organization_rights**
  - Description: List organization rights
  - body request parameters:
      - **body not required**
  - cloud providers: vMware vCloud with NSX

- **list_storage_accounts**
  - Description: List storage accounts
  - body request parameters:
      - **region**: string; required
  - cloud providers: microsoftazure

- **list_nics**
  - Description: List network interfaces
  - body request parameters:
      - **region**: string; required
  - cloud providers: microsoftazure

- **list_invoices**
  - Description: List invoices
  - body request parameters:
      - **region**: string; required, available for microsoftazure
      - **service_name**: string; required, available for CloudWatt
      - **extension**: string; required, available for CloudWatt
  - cloud providers: CloudWatt, microsoftazure

- **list_rates**
  - Description: List rates
  - body request parameters:
      - **region**: string; required, available for microsoftazure
  - cloud providers: microsoftazure

- **list_snapshots**
  - Description: List image snapshots
  - body request parameters:
      - **region**: string; required
  - cloud providers: microsoftazure, openstack, cloudwatt

- **list_containers**
  - Description: List containers
  - body request parameters:
        - **resource_group_name**: string; required
        - **storage_account_name**: string; required
  - cloud providers: microsoftazure

- **list_blobs**
  - Description: List storage blobs
  - body request parameters:
      - **resource_group_name**: string; required
      - **storage_account_name**: string; required
      - **container_name**: string; required
  - cloud providers: microsoftazure

- **list_resource_groups**
  - Description: List resources groups
  - body request parameters:
      - **region**: string; required
  - cloud providers: microsoftazure

- **list_asg_adjustment_types**
  - Description: List autoscaling groups adjustments types
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_asg_instances**
  - Description: List autoscaling groups instances
  - body request parameters:
      - **region**: string; required
      - **instance_id**: string
  - cloud providers: amazonaws

- **list_asg_notification_types**
  - Description: List autoscaling groups notification type
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_asg_termination_policy_types**
  - Description: List autoscaling groups termination policy type
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_availability_zones**
  - Description: List availability zones
  - body request parameters:
      - **region**: string; required
  - cloud providers: flexibleengine

- **list_backup_images**
  - Description: List backup images
  - body request parameters:
      - **region**: string; required
  - cloud providers: openstack, cloudwatt

- **list_cluster_resourcepools_and_vms**
  - Description: List cluster resourcepools and vms
  - body request parameters:
        - **cluster_moid**: string; reqired
  - cloud providers: vSphere

- **list_datastore_clusters**
  - Description: List datastore clusters
  - body request parameters:
      - **body is not required**
  - cloud providers: vSphere

- **list_floating_ips**
  - Description: List floating ips
  - body request parameters:
      - **region**: string; required
      - **available**: boolean;
  - cloud providers: flexibleengine

- **list_image_offers**
  - Description: List image offers
  - body request parameters:
      - **region**: string; required
      - **publisher_name**: string; required
  - cloud providers: microsoftazure

- **list_image_publishers**
  - Description: List image publishers
  - body request parameters:
      - **region**: string; required
  - cloud providers: microsoftazure

- **list_image_skus**
  - Description: List image skus
  - body request parameters:
      - **region**: string; required : ex: "westeurope"
      - **publisher_name**: string;required : ex: "Canonical"
      - **offer**: string; required : ex: "UbuntuServer"
  - cloud providers: microsoftazure

- **list_image_versions**
  - Description: List image versions
  - body request parameters:
      - **region**: string; required : ex: "westeurope"
      - **publisher_name**: string;required : ex: "Canonical"
      - **offer**: string; ex: "UbuntuServer"
      - **sku**: string; required: ex: "16.04-LTS"
  - cloud providers: microsoftazure

- **list_internet_gateways**
  - Description: List internet gateways
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_lc**
  - Description: List lc
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_nsx_application_groups**
  - Description: List nsx application groups
  - body request parameters:
      - **vdc_name**: string; required
      - **vdc_id**: string; required
      - **application_group_id**: string;
  - cloud providers: vCloud with NSX

- **list_nsx_applications**
  - Description: List nsx applications
  - body request parameters:
      - **vdc_name**: string; required
      - **vdc_id**: string; required
      - **application_group_id**: string;
  - cloud providers: vCloud with NSX

- **list_regions_details**
  - Description: List regions details - not supported
  - body request parameters:
  - cloud providers: microsoftazure

- **list_self_owned_images**
  - Description: List self owned images
  - body request parameters:
      - **region**: string; required : amazonaws, openstack, cloudwatt, flexibleengine
  - cloud providers: amazonaws, openstack, cloudwatt, flexibleengine

- **list_snapshot_images**
  - Description: List snapshot images
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws, openstack, cloudwatt

- **list_snapshot_volumes**
  - Description: List snapshot volumes
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_templates**
  - Description: List templates
  - body request parameters:
      - **catalog**: string; required, allowed for vcloud
      - **body not required for vSphere**:
  - cloud providers: vCloud, vSphere

- **list_vapps**
  - Description: List vapps
  - body request parameters:
      - **vdc_name**: string; required
      - **filter**: string; ex: 'only_uic', 'not_uic'
  - cloud providers: vCloud

- **list_vnet_subnets**
  - Description: List vnet subnets
  - body request parameters:
      - **region**: string; required
      - **vpc_id**: string; required
      - **name**: string;
      - **limit**: string;
      - **marker**: string;
  - cloud providers: microsoftazure

- **list_volume_types**
  - Description: List volume types
  - body request parameters:
      - **region**: string; required for flexibleengine
      - **zone**: string; required for googlecloud
  - cloud providers: flexibleengine, googlecloud

- **list_vpc_subnets**
  - Description: List virtual private cloud subnets
  - body request parameters:
      - **region**: string; required
      - **vnet_id**: string; required
  - cloud providers: amazonaws

- **list_vpcs**
  - Description: List virtual private cloud
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **list_zones**
  - Description: List zones
  - body request parameters:
      - **project_id**: string;
      - **max_result**: string;
      - **page_token**: string;
      - **zone**: string;
  - cloud providers: googlecloud

- **get_quotas**
  - Description: Get resource quota
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, openstack, cloudwatt, optional for googlecloud
      - **project_id**: string optional, available for googlecloud
  - cloud providers: all Cloud providers except vSphere, flexibleengine.

- **get_current_billing_items**
  - Description: Get current billing items
  - body request parameters:
      - **region**: string; required,
      - **service_name**: string; required,
  - cloud providers: Cloudwatt

- **get_usage**
  - Description: Get the current usage
  - body request parameters:
      - **start_time**: string; required, available for microsoftazure
      - **end_time**: string; required, available for microsoftazure
      - **show_details**: boolean; available for microsoftazure
      - **aggregation_granularity**: string; available for microsoftazure, ex: "Daily"
      - **region**: string; required, available for cloudwatt
      - **service_name**: string; required, available for cloudwatt
  - cloud providers: microsoftazure, cloudwatt

- **get_cluster_info**
  - Description: Get cluster info
  - body request parameters:
      - **clustermoid**: string; required,
  - cloud providers: vSphere

- **get_current_usage**
  - Description: Get current usage
  - body request parameters:
      - **region**: string; required
      - **service_name**: string; required
  - cloud providers: cloudwatt

- **get_image**
  - Description: Get image
  - body request parameters:
      - **region**: string; required
      - **image_id**: string; required
  - cloud providers: flexibleengine

- **get_instance_info**
  - Description: Get instance info
  - body request parameters:
      - **vdc_moid**: string; required,
      - **vm_moid**: string; required,
  - cloud providers: vSphere

- **get_invoices**
  - Description: Get invoices
  - body request parameters:
      - **region**: string; required, available for microsoftazure, cloudwatt
      - **service_name**: string; required, available for cloudwatt
      - **extension**: string; required, available for cloudwatt
  - cloud providers: microsoftazure, cloudwatt

- **get_ipsec_vpn_configuration**
  - Description: Get ipsec vpn configuration
  - body request parameters:
      - **vdc_name**: string; required,
      - **gateway_name**: string; required if not gateway_id,
      - **gateway_id**: string; required if not gateway_name,
      - **show_sensitive_data**: boolean;
  - cloud providers: vCloud

- **get_load_balancer_configuration**
  - Description: Get load balancer configuration
  - body request parameters:
      - **vdc_name**: string; required,
      - **gateway_name**: string; required if not gateway_id,
      - **gateway_id**: string; required if not gateway_name,
  - cloud providers: vCloud

- **get_network**
  - Description: Get network
  - body request parameters:
      - **region**: string; required,
      - **vnet_id**: string; required,
  - cloud providers: flexibleengine

- **get_offers**
  - Description: Get offers
  - body request parameters:
      - **no body required**
  - cloud providers: microsoftazure

- **get_organization_id**
  - Description: Get organization id
  - body request parameters:
      - **no body required**
  - cloud providers: vCloud

- **get_quota**
  - Description: Get quota
  - body request parameters:
      - **region**: string; required, available for microsoftazure, flexibleengine
      - **type**: string; available for flexibleengine
  - cloud providers: microsoftazure, flexibleengine

- **get_resourcepool_info**
  - Description: Get resourcepool info
  - body request parameters:
      - **resourcepool_moid**: string; required
      - **allvm**: boolean;
  - cloud providers: vSphere

- **get_project**
  - Description: Get project info
  - body request parameters:
      - **project_id**: string;
  - cloud providers: googlecloud

- **get_subnet**
  - Description: Get subnet
  - body request parameters:
      - **region**: string; required
      - **subnet_id**: string; required
  - cloud providers: amazonaws

- **get_vcenter_info**
  - Description: Get vcenter info
  - body request parameters:
      - **no body required**
  - cloud providers: vSphere

- **get_vdc_folders**
  - Description: Get vdc folders
  - body request parameters:
      - **vdc_moid**: string; required if not datacenter
      - **datacenter**: string; required if not vdc_moid
  - cloud providers: vSphere

- **get_volume_types**
  - Description: Get volume types
  - body request parameters:
      - **region**: string;
  - cloud providers: openstack, cloudwatt

- **is_valid_hostname**
  - Description: Veryfies hostname's validity
  - body request parameters:
      - **hostname**: string; required
  - cloud providers: vSphere

- **create_network**
  - Description: Create virtual network
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **vnet_name**: string; required, available for vCloud, optional if not "reference" for vsphere,
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, googlecloud: required if subnet is provided
      - **reference**: string; required if not vnet_name, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, vsphere, googlecloud
      - **cidr_block**: list; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, vsphere, googlecloud: optional
      - **dns**: list; optional, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, vsphere, vcloud
      - **option**: dict; optional, available for amazonaws, microsoftazure, vsphere, googlecloud
          - **googlecloud**
              - **auto_create_subnetworks**: boolean
              - **routing_mode**: string optiona, [ REGIONAL, GLOBAL] default REGIONAL, The network-level routing configuration for this network
              - **description**: string optional
      - **subnet**: dict; optional, available for amazonaws, microsoftazure, vCloud, flexibleengine required, openstack, cloudwatt, vsphere, googlecloud
          - **googlecloud**
              - **cidr_block**: string, optional
              - **reference**: string required
              - **option**: dict, optional
                  - **privateip_google_access**: boolean, optional default false, Whether the VMs in this subnet can access Google services without assigned external IP addresses.
                  - **description**: string optional
                  - **secondary_ip_range**: string optional, The range of IP addresses belonging to this subnetwork secondary range.
                  - **secondary_ip_range_name**: string optional, The name associated with this subnetwork secondary range,
                  - **enable_flow_logs**: boolean, Whether to enable flow logging for this subnetwork.
      - **internet_gateway**: dict; optional, available for amazonaws, microsoftazure
      - **vpn_connection**: list; optional, available for amazonaws, microsoftazure
      - **placement**: string; optional, available for vsphere
  - cloud providers: all Cloud providers.

- **create_subnet**
  - Description: Create a subnet
  - body request parameters:
      - **region**: string; required
      - **network_name**: string; required
      - **resource_group_name**: string; required
      - **subnet_name**: string; required
      - **cidr_block**: string; required
  - cloud providers: microsoftazure

- **create_firewall**
  - Description: Create firewall
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **reference**: string; required, available for vCloud, vsphere, flexibleengine
      - **rule**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **reference**: string; required, available for amazonaws, microsoftazure- if not "resource_group_name", flexibleengine, openstack, cloudwatt,
      - **vnet_id**: string; required, available for amazonaws
      - **rules**: list of dicts; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
          - **name**: string, required
          - **action**: string among [allow, deny], required
          - **from**: string digit, required
          - **to**: string digit, required
          - **range**: string
          - **protocol**: string among [tcp, udp, icmp, esp, ah, ipip, sctp] required
          - **direction**: string among [in, out]
          - **option**: list of dicts
      - **resource_group_name**: string; required, available for amazonaws, microsoftazure if not "reference"
      - **description**: string; optional, available for flexibleengine, openstack, cloudwatt
  - cloud providers: all Cloud providers except googlecloud.

- **create_volume**
  - Description: Create volume, block storage
  - body request parameters:
      - **name**: string; required, available for vCloud, required if not reference: flexibleengine, openstack, cloudwatt, amazonaws, microsoftazure, googlecloud
      - **vdc_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **avzone**: string; required, available for amazonaws, microsoftazure, openstack, cloudwatt, vsphere, googlecloud: if not zone
      - **operation**: string; required, available for amazonaws, microsoftazure, vcloud
      - **devicename**: string; required, available for amazonaws, microsoftazure, openstack, cloudwatt, vsphere
      - **size**: numeric; required, available for amazonaws, microsoftazure, openstack, cloudwatt, vsphere, vCloud, googlecloud, flexibleengine
      - **type**: string; required, available for amazonaws, microsoftazure, openstack, cloudwatt, vsphere, googlecloud, flexibleengine
      - **option**: available for amazonaws, microsoftazure ["partition","mountname","hostcaching","mode","lun","unitnumber","bootorder","iops"], openstack, cloudwatt
          - **googlecloud**
              - **source_image**: string;
              - **source_snapshot**: string;
      - **reference**: string; required, available for flexibleengine, vsphere, googlecloud: not required
      - **format_dict**: string; required if not reference, available for flexibleengine, openstack, cloudwatt, googlecloud
      - **description**: string; available for openstack, cloudwatt, googlecloud, flexibleengine
      - **mountname**: string; available for openstack, cloudwatt, vsphere
      - **partition**: string; available for openstack, cloudwatt, vsphere
      - **project_id**: string; available for googlecloud
      - **zone**: string; available for googlecloud, flexibleengine
      - **option**: dict; available for flexibleengine
      - **tag**: dict; available for googlecloud
  - cloud providers: all Cloud providers.

- **create_keypair**
  - Description: Create keypair
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **key_name**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, googlecloud
      - **public_key**: string; available for flexibleengine
      - **public_key_file**: string; available for flexibleengine
  - cloud providers: all Cloud providers except vCloud, vsphere

- **create_resource_group**
  - Description: Create a resource group
  - body request parameters:
      - **region**: string; required
      - **resource_group_name**: string; required
  - cloud providers: microsoftazure

- **create_public_ip**
  - Description: Create public ip
  - body request parameters:
      - **region**: string; required
      - **type**: string; required
          - **googlecloud**: [ INTERNAL , EXTERNAL], optional
      - **public_ip_name (address_name)**: string required, availaible for googlecloud
      - **ip_version**: string optional IPV4 IPV6, availaible for googlecloud
      - **description**: string optional, availaible for googlecloud
      - **network_tier**: string PREMIEUM | STANDARD, optional , availaible for googlecloud
      - **private_address: string optional only if INTERNAL , availaible for googlecloud
  - cloud providers: amazonaws, flexibleengine, googlecloud.

- **associate_public_ip**
  - Description: Associate public ip
  - body request parameters:
      - **region**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
      - **public_ip**: string; required, available for amazonaws
      - **public_ip_id**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
      - **instance_id**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
      - **pool**: string; available for openstack, cloudwatt
      - **type**: string; available for flexibleengine
      - **fixed_address**: string; available for flexibleengine
  - cloud providers: amazonaws, openstack, cloudwatt, flexibleengine.

- **create_affinity_rule**
  - Description: Create affinity rule
  - body request parameters:
      - **vdc_name**: string; required
      - **polarity**: string; required
      - **name**: string; required
      - **vapp_name**: list;
      - **vapp_href**: string;
      - **vmname**: string;
      - **isenabled**: boolean;
      - **vapp_id**: string;
  - cloud providers: vCloud

- **create_alarm**
  - Description: Create alarm
  - body request parameters:
      - **region**: string; required
      - **reference**: string; ex.: "CPUalarme"
      - **alarm_description**: string; ex.: "alarm description"
      - **metric_name**: string; ex.: "CPUUtilization"
      - **name_space**: string; ex.: "AWS/EC2"
      - **statistic**: string; ex.: "Average"
      - **period**: string; ex.: "60"
      - **uni**: string; ex.: "Kilobytes"
      - **evaluation_periods**: string; ex.: "1"
      - **threshold**: string; ex.: "40"
      - **comparison_operator**: string; ex.: "GreaterThanOrEqualToThreshold"
  - cloud providers: amazonaws

- **create_as**
  - Description: Create auto scaling
  - body request parameters:
      - **region**: string; required
  - cloud providers: amazonaws

- **create_asg**
  - Description: Create auto scaling groupe
  - body request parameters:
      - **region**: string; required
      - **reference**: string; ex.: "asg123"
      - **lc_name**: string; ex.: "LC_123"
      - **min_size**: string; ex.: "0"
      - **max_size**: string; ex.: "0"
      - **desired_capacity**: string; ex.: "0"
      - **default_cooldown**: string; ex.: "300"
      - **av_zone**: list; ex.: ["eu-central-1a"]
      - **subnet_id**: list; ex.: []
      - **health_check_type**: string; ex.: "EC2"
      - **placement_group**: string; ex.: ""
      - **termination_policies**: list; ex.: ["Default"]
      - **"protected_from_scale_in**: string; ex.: false
      - **"tags**: list; ex.: [
          {
            "ResourceType": "auto-scaling-group",
            "Key": "key",
            "Value": "value",
            "PropagateAtLaunch": false
          }]
  - cloud providers: amazonaws

- **create_asg_policy**
  - Description: Create asg policy
  - body request parameters:
      - **region**: string; required
      - **asg_name**: string; ex.: "asg123",
      - **policy_name**: string; ex.: "rdzpolicy1",
      - **adjustment_type**: string; ex.: "ChangeInCapacity",
      - **policy_type**: string; ex.: "StepScaling",
      - **min_adjustment_step**: string; ex.: "0",
      - **min_adjustment_magnitude**: string; ex.: "0",
      - **cooldown**: string; ex.: "60",
      - **scaling_adjustment**: string; ex.: "1",
      - **metric_aggregation_type**: string; ex.: "Average",
      - **step_adjustment**: list; ex.: [
          {
            "MetricIntervalLowerBound": 1,
            "MetricIntervalUpperBound": 4,
            "ScalingAdjustment": 1
          }]
      - **estimated_instance_warmup**: string; ex.: "300"
  - cloud providers: amazonaws

- **create_cluster_vdc**
  - Description: Create cluster vdc
  - body request parameters:
      - **clustername**: string; required
      - **datacenter**: string; required
      - **vdc_moid**: string; required if not datacenter
  - cloud providers: vSphere

- **create_disk**
  - Description: Create disk
  - body request parameters:
      - **reference**: string; required
      - **project_id**: string; required
      - **format_dict**: boolean; required
      - **name**: string; required if not reference
      - **zone**: string; required
      - **avzone**: string; required if not zone
  - cloud providers: googlecloud

- **create_elb**
  - Description: Create elastic load balancer
  - body request parameters:
      - **region': required
      - **name**: string; ex.:'ELBPrl'
      - **avzones**: list; ex.:[list of availability zones]
      - **subnets**: list; ex.:[list of subnet ids]
      - **security_groups**: list; ex.: [list of secgoup ids]
      - **type**: string; ex.: 'internet-facing | internal'
      - **cross_zone**: boolien; ex.: true/false
      - **connection_draining_timeout**: numeric; ex.: 300
      - **idle_timeout**: numeric; ex.: 400
      - **listeners**: list; ex.: 'list of dict [{'Protocol':'string',
                  'LoadBalancerPort':'int',
                  'InstanceProtocol':'string',
                  'InstancePort': 'int',
                  'SSLCertificateId':'string'}]',
      - **health-check**: dict; ex.:v 'dict {'Target':'protocol/port/file = HTTP:8080/index.html',
                  'Interval':'int',
                  'Timeout': 'int',
                  'UnhealthyThreshold':
                  'int',
                  'HealthyThreshold': 'int'}'
      - **cookie_stickiness**: dict; ex.: 'dict {'Type:'elb|application',
                  'PolicyName': 'string',
                  'CookieExpirationPeriod': 'int',
                  'CookieName': 'string'}'
      - **instances**: list; ex.: 'list of dict instance ids [{'InstanceId':'value'}]'
      - **tags**: list; ex.: list of dict [{'Key':'value', 'Value':'value'}]
  - cloud providers: amazonaws

- **create_floating_ip**
  - Description: Create floating ip
  - body request parameters:
      - **region**: string; required
      - **type**: string;
  - cloud providers: flexibleengine

- **create_folder_vdc**
  - Description: Create folder vdc
  - body request parameters:
      - **folder_name**: string; required
      - **datacenter**: string; required
      - **vdc_moid**: string; required if not datacenter
  - cloud providers: vSphere

- **create_lc**
  - Description: Create launche configuration
  - body request parameters:
      - **region**: string;  required
      - **reference**: string;  ex.: "LC_123",
      - **key_name**: string;  ex.: "name",
      - **image_id**: string;  ex.: "ami-af0fc0c0",
      - **security_group_id**: list;ex.:   [
      "sg-abd5dcc3"
    ],
      - **instance_id**: string;
      - **flavor**: string;  ex.: "t2.micro",
      - **storage**: dict; ex.:
      {
        "size": "8",
        "type": "gp2",
        "delete_on_termination": true,
        "encryption": "",
        "snapshot_id": "",
        "device_name": "/dev/xvda"
      }
    ,
      - **monitor**: boolien; ex.:   true,
      - **ebs_optimized**: boolien; ex.:  false,
      - **role**: string; ex.:  "",
      - **access**: string; ex.:  "private",
      - **tenancy**: string; ex.:  "default",
      - **userdata**: string; ex.:  ""
  - cloud providers: amazonaws

- **create_nic**
  - Description: Create nic
  - body request parameters:
      - **region**: string;  required
      - **resource_group_name**: string;  required
      - **nic_name**: string;  required
      - **nic_config**: dict;  required
          - **location**: string;  required
          - **ip_configurations**: dict;  required
              - **name**: string;  required
              - **subnet**: dict;  required
                  - **id**: string;  required
  - cloud providers: microsoftazure

- **create_placement_group**
  - Description: Create placement group
  - body request parameters:
      - **region**: string;  required
      - **group_name**: string;  required
  - cloud providers: amazonaws

- **create_sns_topic**
  - Description: Create sns topic
  - body request parameters:
      - **region**: string;  required,
      - **topic_name**: string;  required
      - **topic_arn**: string;
      - **protocol**: string;
      - **endpoint**: string;
  - cloud providers: amazonaws

- **create_storage_account**
  - Description: Create storage account
  - body request parameters:
      - **region**: string;  required,
      - **storage_name**: string;  required
      - **affinity_group_name**: string;
      - **resource_group_name**: string;
      - **extended_properties**: string;
      - **label**: string;
      - **description**: string;
      - **type**: string;
  - cloud providers: microsoftazure

- **create_vpn_connection**
  - Description: Create vpn connection
  - body request parameters:
      - **region**: string;  required
      - **reference**: string;  required
      - **vnet_id**: string;  required
      - **rtable_id**: list;
      - **subnet_id**: list;
      - **type**: string;
      - **av_zzone**: string;
      - **customer_gateway**: string;
      - **vpn_gateway**: string;
      - **av_zone**: string;
      - **routing**: string;
      - **static_ip**: string;
  - cloud providers: amazonaws

- **delete_network**
  - Description: Delete network
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **network_name**: string; required, available for vCloud
      - **region**: string; required, available for microsoftazure, amazonaws, flexibleengine, openstack, cloudwatt
      - **vnet_name**: string; required, available for microsoftazure, googlecloud: if not vnet_id
      - **resource_group_name**: string; required, available for microsoftazure
      - **vpc_id**: string; required, available for amazonaws
      - **vnet_id**: string; required if "not vpc_id", available for amazonaws, flexibleengine, openstack, cloudwatt, googlecloud: required if not vnet_name
      - **all_dependencies**: boolean; flexibleengine
  - cloud providers: all Cloud providers, except vMare vSphere

- **delete_volume**
  - Description: Delete volume
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **volume_id**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt, googlecloud
      - **reference**: string; required, available for microsoftazure
      - **force**: boolean; available for flexibleengine
      - **zone**: string; required, available for googlecloud
  - cloud providers: all Cloud providers except vCloud, vSphere.

 - **delete_firewall**
  - Description: Delete firewall
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **gateway_name**: string; required, available for vCloud
      - **rule**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **security_group_id**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt
      - **security_group_name**: string; required, available for microsoftazure
      - **resource_group_name**: string; required, available for microsoftazure
      - **firewall_name**: string, required, available for googlecloud
  - cloud providers: all Cloud providers. except vMware vSphere

- **delete_keypair**
  - Description: Delete a keypair
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **key_name**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt, googlecloud
  - cloud providers: all Cloud providers except vCloud, vSphere

- **delete_public_ip**
  - Description: Delete a public ip
  - body request parameters:
      - **region**: string; required, available for microsoftazure, flexibleengine, googlecloud
      - **resource_group_name**: string; required, available for microsoftazure
      - **ip_name**: string; required, available for microsoftazure
      - **region**: string; required, available for amazonaws
      - **public_id**: string; required, available for amazonaws
      - **public_ip_id**: string; required, available for amazonaws, flexibleengine, google if not public_ip_name
      - **public_ip_name**: string required, available for googlecloud
  - cloud providers: amazonaws, microsoftazure, flexibleengine, googlecloud.

- **delete_elb**
  - Description: Delete ELB
  - body request parameters:
      - **region**: string; required
      - **name**: string; required
  - cloud providers: amazonaws

- **delete_lc**
  - Description: Delete LC
  - body request parameters:
      - **region**: string; required
      - **lc_name**: string; required
  - cloud providers: amazonaws

- **delete_asg**
  - Description:  Delete asg
  - body request parameters:
      - **region**: string; required
      - **asg_name**: string; required
      - **force_delete**: string; optional
  - cloud providers: amazonaws

- **delete_nic**
  - Description: Delete nic
  - body request parameters:
      - **region**: string; required
      - **resource_group_name**: string; required
      - **nic_name**: string; required
  - cloud providers: microsoftazure

- **delete_blob**
  - Description: Delete a blob storage
  - body request parameters:
      - **region**: string; required
      - **resource_group_name**: string; required
      - **storage_account_name**: string; required
      - **blob_name**: string; required
      - **container_name**: string; required
  - cloud providers: microsoftazure

- **delete_snapshot**
  - Description: Delete snapshot image
  - body request parameters:
      - **region**: string; required
      - **storage_name**: string; required
      - **resource_group_name**: string; required
  - cloud providers: microsoftazure.

- **delete_resource_group**
  - Description: Delete a resource group
  - body request parameters:
      - **region**: string; required
      - **resource_group_name**: string; required
  - cloud providers: microsoftazure

- **delete_affinity_rule**
  - Description: Delete affinity rule
  - body vdc_name parameters:
      - **region**: string; required
      - **href**: string; required
      - **id**: string; required
  - cloud providers: vCloud

- **delete_catalog_item**
  - Description: Delete catalog item
  - body request parameters:
      - **catalog_name**: string; required
      - **item_name**: string; required
  - cloud providers: vCloud

- **delete_disk**
  - Description: Delete disk
  - body request parameters:
      - **volume**: string; required
      - **volume_id**: string; required if not "volume"
      - **zone**: string;
      - **region**: string; required
  - cloud providers: googlecloud

- **delete_floating_ip**
  - Description: Delete floating ip
  - body request parameters:
      - **region**: string; required
      - **public_ip_id**: string; required
  - cloud providers: flexibleengine

- **delete_ipsec_vpn_configuration**
  - Description: Delete ipsec vpn configuration
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_ipsec_vpn_tunnel**
  - Description: Delete ipsec vpn tunnel
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **tunnel**: string;
    - cloud providers: vCloud

- **delete_layer2_distributed_firewall_rule**
  - Description: Delete layer2 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
  - cloud providers: vCloud

- **delete_layer2_distributed_firewall_section**
  - Description: Delete layer2 distributed firewall section
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
  - cloud providers: vCloud

- **delete_layer3_distributed_firewall_rule**
  - Description: Delete layer3 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
  - cloud providers: vCloud

- **delete_layer3_distributed_firewall_section**
  - Description: Delete layer3 distributed firewall section
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
  - cloud providers: vCloud

- **delete_load_balancer_application_profile**
  - Description: Delete load balancer application profile
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **application_profile_id**: string; required
  - cloud providers: vCloud

- **delete_load_balancer_application_profiles**
  - Description: Delete load balancer application profiles
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_load_balancer_application_rule**
  - Description: Delete load balancer application rule
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **application_rule_id**: string; required
  - cloud providers: vCloud

- **delete_load_balancer_application_rules**
  - Description: Delete load balancer application rules
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_load_balancer_monitor**
  - Description: Delete load balancer monitor
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **monitor_id**: string; required
  - cloud providers: vCloud

- **delete_load_balancer_monitors**
  - Description: Delete load balancer monitors
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_load_balancer_pool**
  - Description: Delete load balancer pool
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **pool_id**: string; required
  - cloud providers: vCloud

- **delete_load_balancer_pools**
  - Description: Delete load balancer pools
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_load_balancer_virtual_server**
  - Description: Delete load balancer virtual server
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **virtual_server_id**: string; required
  - cloud providers: vCloud

- **delete_load_balancer_virtual_servers**
  - Description: Delete load balancer virtual servers
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
  - cloud providers: vCloud

- **delete_nat_rule**
  - Description: Delete nat rule
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required
      - **gateway_id**: string; required
      - **source_ip**: string;
      - **from_port**: string;
      - **destination_ip**: string;
      - **to_port**: string;
      - **type**: string;
      - **protocol**: string;
      - **rule_id**: string;
      - **timeout**: string;
  - cloud providers: vCloud

- **delete_placement_group**
  - Description: Delete placement group
  - body request parameters:
      - **region**: string; required
      - **group_name**: string; required
  - cloud providers: amazonaws

- **delete_storage_account**
  - Description: Delete storage account
  - body request parameters:
      - **region**: string; required
      - **storage_name**: string; required
      - **resource_group_name**: string; required
  - cloud providers: microsoftazure

- **delete_subnet**
  - Description: Delete subnet
  - body request parameters:
      - **region**: string; required
      - **network_name**: string; required
      - **resource_group_name**: string; required
      - **subnet_name**: string; required
      - **cidr_block**: string;
   - cloud providers: microsoftazure

- **delete_vnet**
  - Description: Delete vnet
  - body request parameters:
      - **region**: string; required
      - **vnet_name**: string; required
      - **resource_group_name**: string; required
      - **affinity_group_name**: string;
  - cloud providers: microsoftazure

- **perform_on_instance**
  - Description: Perform a set of actions on virtual machine like stop restart resume …
  - body request parameters:
      - **region**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt
      - **resource_group_name**: string; required, available for microsoftazure
      - **vm_name**: string; required, available for microsoftazure, vcloud, flexibleengine, openstack, cloudwatt, vcloud if method "get_snapshot""resize""console"
      - **instance_id**: string; required, available for amazonaws, flexibleengine, openstack, cloudwatt
      - **method**: string; required,
          - **available for amazonaws** ["start", "delete", "stop", "resume", "restart", "snapshot", "resize", "create_image", "disable_source_destination_check", "enable_source_destination_check", "get_password"],
          - **available for microsoftazure** ["start", "delete", "stop", "resume", "restart", "snapshot", "resize"],
          - **avaible for flexibleengine, openstack, cloudwatt** ["delete", "start", "stop", "restart", "snapshot", "resize", "suspend", "pause", "unpause", "resume", "revert", "unshelve", "shelve", "rescue", "unrescue", "restart", "rebuild", "update", "shelve_offload", "console", "backup", "restore"]
          - **available for vcloud** ["poweron",  "suspend", "delete", "restart", "stop", "delete_snapshot", "resume", "snapshot", "rebuild", "resize", "console"]
          - **available for vsphere** ["delete", "stop", "resume", "restart", "snapshot", "resize", "list_snapshots", "delete_nic", "add_nic", "list_nic", "console", "delete_snapshot", "delete_all_snapshot", "add_disk", "remove_disk", "rebuild", "list_disks"]
      - **flavor**: string; if method "resize", available for amazonaws,microsoftazure
      - **keyfile**: string; if method "get_password", available for amazonaws
      - **accesskey, secretkey, zone, snapshotname, description**: string; if method ["snapshot","create_image"], available for amazonaws
      - **accesskey, secretkey, zone**: string; if method "get_firewall", available for amazonaws
      - **image**: string; if method "snapshot", available for amazonaws,microsoftazure
      - **shutdown_option**: string; if method "stop", available for amazonaws,microsoftazure
      - **metadata**: string; available for flexibleengine, openstack, cloudwatt
      - **console**: string; available for flexibleengine, openstack, cloudwatt
      - **flavor_id**: string; available for flexibleengine, openstack, cloudwatt, googlecloud  (required if method is resize)
      - **confirm"**: string; available for flexibleengine, openstack, cloudwatt
      - **console_type**: string; available for flexibleengine, openstack, cloudwatt
      - **name**: string; available for flexibleengine, openstack, cloudwatt
      - **snapshot_name**: string; available for flexibleengine, openstack, cloudwatt
      - **image_id**: string; rquired if method is snapshot,available for flexibleengine, openstack, cloudwatt, googlecloud
      - **preserve**: string; available for flexibleengine, openstack, cloudwatt
      - **backup_name**: string; available for flexibleengine, openstack, cloudwatt
      - **backup_type**: string; available for flexibleengine, openstack, cloudwatt
      - **rotation**: string; available for flexibleengine, openstack, cloudwatt
      - **description**: string; available for flexibleengine, openstack, cloudwatt
      - **preserve_ephemeral**: boolean; available for flexibleengine, openstack, cloudwatt
      - **keyfile**: string; available for flexibleengine, openstack, cloudwatt
      - **keyname**: string; available for flexibleengine, openstack, cloudwatt
      - **reboot_type**: string; available for flexibleengine, openstack, cloudwatt
      - **force**: boolean; available for flexibleengine, openstack, cloudwatt
      - **vdc_name**: string; required, available for vcloud
      - **vapp_name**: string; required, available for vcloud
      - **vdc_moid**: string; required, available for vsphere
      - **vm_moid**: string; required, available for vsphere
      - **ram, cpu, disk**: string; required if method "resize", available for vcloud
      - **paramList for vsphere**: string; required for method :
          - **delete**: ( vm_moid, vdc_moid),
          - **stop**: ( vm_moid, vdc_moid),
          - **resume**: ( vm_moid, vdc_moid, wait_for_ip_address, int(wait_timeout)),
          - **restart**: ( vm_moid, vdc_moid, operation, wait_for_ip_address, int(wait_timeout)),
          - **snapshot**: ( vm_moid, vdc_moid, snapshot_name, description),
          - **resize**: ( vm_moid, vdc_moid, memory, cpu, disk_size, disk_number, int(wait_timeout)),
          - **list_snapshots**: ( vm_moid, vdc_moid),
          - **delete_snapshot**: ( vm_moid, vdc_moid, snapshot_name),
          - **delete_all_snapshot**: ( vm_moid, vdc_moid),
          - **rebuild**: ( vm_moid, vdc_moid, snapshot_name, wait_for_ip_address, int(wait_timeout)),
          - **add_disk**: ( vm_moid, vdc_moid, disk_size, disk_type, disk_mode),
          - **remove_disk**: ( vm_moid, vdc_moid, disk_number),
          - **list_disks**: ( vm_moid, vdc_moid),
          - **delete_nic**: ( vm_moid, vdc_moid, [nic_label], [nic_number]),
          - **add_nic**: ( vm_moid, vdc_moid, nic_config),
          - **list_nic**: ( vm_moid, vdc_moid),
          - **console**: ( vm_moid, vdc_moid, console_port, console_type)
      - **instance_name(instance, vm)**: string, required, available for googlecloud
      - **zone**: string required, available for googlecloud
      - **project_id**: string, optional, available for googlecloud
      - **method**: string among ["delete", "start", "reset", "stop", "restart", "snapshot"], available for googlecloud
      - **machine_type**: string, if not flavor_id, required if method is resize , available for googlecloud
  - cloud providers: all Cloud providers.

- **perform_on_network**
  - Description: Perform a set of actions on virtual network like list_subnets, delete_subnet, add_subnet ..
  - body request parameters:
      - **region**: string; required, available for amazonaws, openstack, cloudwatt, optional for googlecloud, flexibleengine
      - **vnet_id**: string; required, available for amazonaws, openstack, cloudwatt, googlecloud, flexibleengine
      - **method**: string; required, available for amazonaws :["delete",
            "detach_classic_instance",
            "attach_classic_instance",
            "enable_classic_link",
            "disable_classic_link",
            "update_classic_link_enabled",
            "enable_dns_hostnames",
            "disable_dns_hostnames",
            "delete_security_groups",
            "list_subnets",
            "delete_subnets",
            "add_route",
            "delete_route",
            "create_route_table",
            "associate_route_table",
            "disassociate_route_table",
            "list_route_tables",
            "list_internet_gateways",
            "create_internet_gateway",
            "attach_internet_gateway",
            "detach_internet_gateway",
            "list_nat_gateways",
            "list_instances",
            "delete_internet_gateways",
            "delete_route_tables"]
      - **instance_id**: string; if method ["detach_classic_instance",
            "attach_classic_instance",
            "enable_classic_link",
            "disable_classic_link",
            "update_classic_link_enabled",
            "list_instances"], available for openstack, cloudwatt: ["delete", "delete_subnet", "delete_router", "delete_interface", "add_subnet"],
            googlecloud, flexibleengine ["delete", "delete_subnet", "add_subnet"]
      - **internet_gateway_id**: string; if method ["list_internet_gateway","detach_internet_gateway","vpc_attach_internet_gateways"]
      - **security_group_id**: string; if method "delete_security_groups", available for amazonaws
      - **subnet_id**: string; if method "vpc_delete_subnets", available for amazonaws ; if method "delete_subnet", "delete_interface", available for openstack, cloudwatt
      - **rtable_id, route_destination, target_route, target_value**: string; if method "add_route", available for amazonaws
      - **rtable_id, route_destination**: string; if method "delete_route", available for amazonaws
      - **rtable_name, subnet_id**: string; if method "create_route_table", available for amazonaws
      - **rtable_id, subnet_id**: string; if method "associate_route_table", available for amazonaws
      - **association_id**: string; if method "disassociate_route_table", available for amazonaws
      - **internet_gateway_name**: string; if method "create_internet_gateway", available for amazonaws
      - **nat_gateway_id**: string; if method "list_nat_gateways", available for amazonaws
      - **router_id**: string; if method "delete_subnet", "delete_router", "delete_interface", "add_subnet" , available for openstack, cloudwatt
      - **subnet_name, cidr_block, router_name, dns, ip_version**: string; if method "add_subnet" , available for openstack, cloudwatt
      - **subnet_name, cidr_block, ip_version**: string; available for googlecloud
      - **vnet_name**: string required if vnet_id, available for googlecloud
      - **zone**: string optional, available for googlecloud
      - **privateip_google_access**: boolean, optional, available for googlecloud
      - **enable_flow_logs**: boolean optional, available for googlecloud
      - **secondary_ip_range**: string optional, available for googlecloud
      - **secondary_ip_range_name**: string optional, available for googlecloud
      - **force**: boolean, available for flexibleengine
  - cloud providers: amazonaws, openstack, cloudwatt, googlecloud.

- **perform_on_volume**
  - Description: Perform a set of actions on a volume like attach, detach, delete …
  - body request parameters:
      - **vdc_name**: string; required, available for vCloud
      - **vapp_name**: string; required, available for vCloud
      - **vmname**: string; required, available for vCloud
      - **volume_id**: string; required, available for vCloud, amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **disk_name**: string; required, available for vCloud
      - **region**: string; required, available for amazonaws, microsoftazure, flexibleengine, openstack, cloudwatt
      - **method**: string; required, available for amazonaws, vCloud, microsoftazure ["attach", "detach", "delete", "modify", "snapshot"], openstack, cloudwatt, flexibleengine, googlecloud [attach, detach, delete]
      - **vm_name**: if method "attach","detach" , available for microsoftazure
      - **group_name, disk_name, timeout**: if method "attach","detach","delete","modify","snapshot", available for microsoftazure
      - **disk_id**: if method "attach","detach","snapshot" , available for microsoftazure
      - **lun**: if method "attach", available for microsoftazure
      - **size, account_type**: if method "modify", available for microsoftazure
      - **snapshot_name**: if method "snapshot", available for microsoftazure
      - **instance_id**: string; required if method "attach", "detach",  available for flexibleengine, openstack, cloudwatt
      - **devicename**: string; required if method "attach",  available for flexibleengine, openstack, cloudwatt
      - **force**: boolean; required if method "delete",  available for flexibleengine, openstack, cloudwatt
      - **name**: string, required if method "snapshot", available for openstack, cloudwatt
      - **description**: string, required if method "snapshot", available for openstack, cloudwatt
      - **volume(volume_id)**: string required, available for googlecloud
      - **zone**: string, required, available for googlecloud
      - **instance_name**: string, required if method is attach or detach, available for googlecloud
      - **devicename**: string required  required if method is attach or detach, available for googlecloud
      - **decription**: string optional, available for googlecloud
      - **force_attach**: bool true or false only for attach, available for googlecloud
      - **auto_delete**: bool true or false, only for attach, available for googlecloud
      - **mode**: string READ_WRITE READ_ONLY only for attach, available for googlecloud
      - **boot**: bool true false only for attach, available for googlecloud
      - **interface**: string SCSI, NVME only for attach, available for googlecloud
      - **type**: string PERSISTENT, SCRATCH only for attach, available for googlecloud
  - cloud providers: all Cloud providers except vSphere.

- **perform_on_elb**
  - Description: Perform a set of actions on ELB
  - body request parameters:
      - **region**: string; required
      - **method**: string; required
      - **Name**: string; required
      - **Tags**: if method "add_tags"
      - **SecurityGroups**:  if method: "apply_security_groups_to_load_balancer"
      - **Subnets**: if method:  "attach_load_balancer_to_subnets"
      - **HealthCheck**:  if method: "configure_health_check"
      - **PolicyName, CookieName**:  if method: "create_app_cookie_stickiness_policy"
      - **PolicyName, CookieExpirationPeriod**:  if method: "create_lb_cookie_stickiness_policy"
      - **Listeners**: if method: "create_load_balancer_listeners"
      - **PolicyName, PolicyTypeName, PolicyAttributes**:  if method: "create_load_balancer_policy"
      - **LoadBalancerPorts**:  if method: "delete_load_balancer_listeners"
      - **PolicyName**:  if method: "delete_load_balancer_policy"
      - **Instances**:  if method: "deregister_instances_from_load_balancer"
      - **Instance**:  if method: "describe_instance_health"
      - **Subnets**:  if method: "detach_load_balancer_from_subnets"
      - **AvailabilityZones**:  if method: "disable_availability_zones_for_load_balancer"
      - **AvailabilityZones**:  if method: "enable_availability_zones_for_load_balancer"
      - **Instances**:  if method: "register_instances_with_load_balancer"
      - **LoadBalancerPort, SSLCertificateId**:  if method: "set_load_balancer_listener_ssl_certificate"
      - **InstancePort, PolicyNames**:  if method: "set_load_balancer_policies_for_backend_server"
      - **LoadBalancerPort, PolicyNames**:  if method: "set_load_balancer_policies_of_listener"
      - **LoadBalancerAttributes**:  if method: "modify_load_balancer_attributes"
  - cloud providers: amazonaws

- **perform_on_asg**
  - Description: Perform a set of action on ASG
  - body request parameters:
      - **asg_name**: string, required
      - **method**: string, required
      - **InstanceIds**: if method: "attach_instances"
      - **TargetGroupARNs**: if method: "attach_load_balancer_target_groups"
      - **LoadBalancerNames**: if method: "attach_load_balancers"
      - **LifecycleHookName,LifecycleActionToken,LifecycleActionResult,InstanceId**: if method: "complete_lifecycle_action"
      - **LifecycleHookName**: if method: "delete_lifecycle_hook"
      - **TopicARN**: if method: "delete_notification_configuration"
      - **PolicyName**: if method: "delete_policy"
      - **ScheduledActionName**: if method: "delete_scheduled_action"
      - **LifecycleHookNames**: if method: "describe_lifecycle_hooks"
      - **asg_name**: if method: "describe_load_balancer_target_groups":
      - **asg_name**: if method: "describe_load_balancers"
      - **asg_name**: if method: "describe_notification_configurations"
      - **PolicyNames,PolicyTypes**: if method: "describe_policies"
      - **ActivityIds**: if method: "describe_scaling_activities"
      - **ScheduledActionNames,StartTime,EndTime**: if method: "describe_scheduled_actions"
      - **InstanceIds, ShouldDecrementDesiredCapacity**: if method: "detach_instances"
      - **TargetGroupARNs**: if method: "detach_load_balancer_target_groups"
      - **LoadBalancerNames**: if method: "detach_load_balancers"
      - **Metrics**: if method: "disable_metrics_collection"
      - **Metrics,Granularity**: if method: "enable_metrics_collection"
      - **InstanceIds, ShouldDecrementDesiredCapacity**: if method: "enter_standby"
      - **PolicyName,HonorCooldown,MetricValue,BreachThreshold**: if method: "execute_policy"
      - **InstanceIds**: if method: "exit_standby"
      - **LifecycleHookName,LifecycleTransition,RoleARN,NotificationTargetARN,NotificationMetadata,HeartbeatTimeout,DefaultResult**: if method: "put_lifecycle_hook"
      - **TopicARN,NotificationTypes**: if method: "put_notification_configuration"
      - **LifecycleHookName,LifecycleActionToken,InstanceId**: if method: "record_lifecycle_action_heartbeat"
      - **ScalingProcesses**: if method: "resume_processes"
      - **DesiredCapacity,HonorCooldown**: if method: "set_desired_capacity"
      - **InstanceIds,ProtectedFromScaleIn**: if method: "set_instance_protection"
      - **ScalingProcesses**: if method: "suspend_processes"
      - **LaunchConfigurationName**:string, required if method: "update_auto_scaling_group"
      - **MinSize,
          MaxSize,
          DesiredCapacity,
          DefaultCooldown,
          AvailabilityZones,
          HealthCheckType,
          HealthCheckGracePeriod,
          PlacementGroup,
          SubnetId,
          TerminationPolicies,
          NewInstancesProtectedFromScaleIn**, string, optional, if method: "update_auto_scaling_group"
      - **tags**: if method: "create_or_update_tags"
  - cloud providers: amazonaws

- **perform_on_disk**
  - Description: Perform on disk
  - body request parameters:
      - **volume(volume_id)**: string required,
      - **zone**: string, required,
      - **instance_name**: string, required if method is attach or detach,
      - **devicename**: string required  required if method is attach or detach,
      - **method**: string; required, [attach, detach, delete]
      - **decription**: string optional,
      - **force_attach**: bool true or false only for attach,
      - **auto_delete**: bool true or false, only for attach,
      - **mode**: string READ_WRITE READ_ONLY only for attach,
      - **boot**: bool true false only for attach,
      - **interface**: string SCSI, NVME only for attach,
      - **type**: string PERSISTENT, SCRATCH only for attach,
  - cloud providers: googlecloud

- **perform_on_snapshot_image**
  - Description: Perform on snapshot image
  - body request parameters:
      - **region**: string, required; available for amazonaws; not required for openstack, cloudwatt
      - **snapshot_id**: string, required; available for amazonaws, openstack, cloudwatt
      - **method**: string, required ; available for amazonaws (delete, deregister, copy); available for openstack, cloudwatt (delete)
      - **name**: string, available for amazonaws
      - **source**: string, available for amazonaws
  - cloud providers: amazonaws, openstack, cloudwatt

- **perform_on_snapshot_volume**
  - Description: Perform on snapshot volume
  - body request parameters:
      - **region**: string, required;
      - **snapshot_id**: string, required;
      - **method**: string, required;
          - **delete,deregister**:
          - **copy**: string, required param: (name, source),
          - **create_volume**: string, required param: (name, avzone, size, type, devicename, mountname, partition,
                                              tag (dict), option (dict), reference)
  - cloud providers: amazonaws

- **perform_on_vnet**
  - Description: Perform on vnet
  - body request parameters:
      - **region**: string, required; optional for googlecloud
      - **vnet_id**: string, required;
      - **method**: string, required;
          - **AMAZON**
              - **delete**: string,
              - **detach_classic_instance**: string, required param:( method, instance_id),
              - **attach_classic_instance**: string, required param:( method, instance_id),
              - **enable_classic_link**: string, required param:( method, instance_id),
              - **disable_classic_link**: string, required param:( method, instance_id),
              - **update_classic_link_enabled**: string, required param:( method, instance_id),
              - **enable_dns_hostnames**: boolean, required param:( true),
              - **disable_dns_hostnames**: boolean, required param:( false),
              - **delete_security_groups**: string, required param:( security_group_id),
              - **vpc_list_subnets**: string,
              - **vpc_delete_subnets**: string, required param:( subnet_id),
              - **vpc_add_route**: string, required param:( rtable_id, route_destination, target_route, target_value),
              - **vpc_delete_route**: string, required param:( rtable_id, route_destination),
              - **vpc_create_route_table**: string, required param:( rtable_name, subnet_id),
              - **vpc_associate_route_table**: string, required param:( rtable_id, subnet_id),
              - **vpc_disassociate_route_table**: string, required param:( association_id),
              - **vpc_list_route_tables**: string,
              - **vpc_list_internet_gateways**: string, required param:( internet_gateway_id),
              - **vpc_create_internet_gateway**: string, required param:( internet_gateway_name),
              - **vpc_detach_internet_gateways**: string, required param:( internet_gateway_id),
              - **vpc_attach_internet_gateways**: string, required param:( internet_gateway_id),
              - **vpc_list_nat_gateways**: string, required param:( nat_gateway_id),
              - **vpc_list_instances**: string, required param:( filter, instance_id),
              - **vpc_delete_internet_gateways**: string,
              - **vpc_delete_route_tables**: string,
          - **OPENSTACK, CLOUDWATT**
              - **delete**: string,
              - **delete_subnet**: string, required param:(subnet_id, router_id),
              - **delete_router**: string, required param:(router_id),
              - **delete_interface**: string, required param:(router_id, subnet_id),
              - **add_subnet**: string, required param:(subnet_name, cidr, router_id, router_name, dns, ip_version)
          - **FLEXIBLEENGINE**
              - **delete**: string, required param:(all_dependencies),
              - **delete_subnet**: string, required param:(subnet_id),
              - **add_subnet**: string, required param:(subnet_name, cidr_block, gateway_ip, dhcp_enable, avzone, primary_dns, secondary_dns, dnslist)
          - **GOOGLE**
              - **vnet_name**: string required if not vnet_id
              - **method**: string among ["delete", "delete_subnet", "add_subnet"] required
              - **subnet_name**: string optional
              - **ip_version**: string, optional
              - **cidr_block**: string optional
              - **zone**: string optional
              - **privateip_google_access**: boolean, optional
              - **enable_flow_logs**: boolean optional
              - **secondary_ip_range**: string optional
              - **secondary_ip_range_name**: string optional
    - cloud providers: amazonaws, openstack, cloudwatt, flexibleengine, googlecloud

- **perform_on_vpc**
  - Description: Perform on vpc
  - body request parameters:
      - **region**: string, required;
      - **vnet_id**: string, required;
      - **method**: string, required;
          - **delete**: string,
          - **detach_classic_instance**: string, required param:( method, instance_id),
          - **attach_classic_instance**: string, required param:( method, instance_id),
          - **enable_classic_link**: string, required param:( method, instance_id),
          - **disable_classic_link**: string, required param:( method, instance_id),
          - **update_classic_link_enabled**: string, required param:( method, instance_id),
          - **enable_dns_hostnames**: boolean, required param:( true),
          - **disable_dns_hostnames**: boolean, required param:( false),
          - **delete_security_groups**: string, required param:( security_group_id),
          - **vpc_list_subnets**: string,
          - **vpc_delete_subnets**: string, required param:( subnet_id),
          - **vpc_add_route**: string, required param:( rtable_id, route_destination, target_route, target_value),
          - **vpc_delete_route**: string, required param:( rtable_id, route_destination),
          - **vpc_create_route_table**: string, required param:( rtable_name, subnet_id),
          - **vpc_associate_route_table**: string, required param:( rtable_id, subnet_id),
          - **vpc_disassociate_route_table**: string, required param:( association_id),
          - **vpc_list_route_tables**: string,
          - **vpc_list_internet_gateways**: string, required param:( internet_gateway_id),
          - **vpc_create_internet_gateway**: string, required param:( internet_gateway_name),
          - **vpc_detach_internet_gateways**: string, required param:( internet_gateway_id),
          - **vpc_attach_internet_gateways**: string, required param:( internet_gateway_id),
          - **vpc_list_nat_gateways**: string, required param:( nat_gateway_id),
          - **vpc_list_instances**: string, required param:( filter, instance_id),
          - **vpc_delete_internet_gateways**: string,
          - **vpc_delete_route_tables**: string,
  - cloud providers: amazonaws

- **update_affinity_rule**
  - Description: Update affinity rule
  - body request parameters:
      - **"vdc_name**: string, required
      - **"rule_id**: string, required if not rule_href
      - **"rule_href**: string, required if not rule_id
      - **"name**: string,
      - **"vapp_name**: string,
      - **"vapp_href**: string,
      - **"vmname**: string,
      - **isenabled**: string,
      - **vapp_id**: string,
      - **action**: string, "add"
  - cloud providers: vcloud

- **update_ipsec_vpn_tunnel**
  - Description: Update ipsec vpn tunnel
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **tunnel**: string;
  - cloud providers: vCloud

- **update_layer2_distributed_firewall_rule**
  - Description: Update layer2 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
      - **rule**: dict; required
  - cloud providers: vCloud

- **update_layer2_distributed_firewall_section**
  - Description: Update layer2 distributed firewall section
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
      - **rule**: dict; required
  - cloud providers: vCloud

- **update_layer3_distributed_firewall_rule**
  - Description: Update layer3 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
      - **rule**: dict; required
  - cloud providers: vCloud

- **update_layer3_distributed_firewall_section**
  - Description: Update_layer3_distributed_firewall_section
  - body request parameters:
  - cloud providers: vCloud

- **update_load_balancer_application_profile**
  - Description: Update load balancer application profile
  - body request parameters:
      - **vdc_name**: string; required; the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required; vdc id optionel if vdc_name is provided
      - **rule_id**: string; reuired
      - **etag**: string; required, this value is obteined from list action
      - **rule**: dict; required
  - cloud providers: vCloud

- **update_load_balancer_application_rule**
  - Description: Update load balancer application rule
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **application_rule_id**: string; required
      - **application_rule**: dict; required
          - **name**: string; required
          - **script**: string; required
  - cloud providers: vCloud

- **update_load_balancer_monitor**
  - Description: Update load balancer monitor
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **monitor_id**: string; required
      - **monitor**: dict; required
          - **name**: string; required
          - **type**: string;
          - **interval**: string;
          - **timeout**: string;
          - **max_retries**: string;,
          - **method**: string;
          - **url**: string;
          - **expected**: string;
          - **send**: string;
          - **receive**: string;
          - **extension**: string;
  - cloud providers: vCloud

- **update_load_balancer_pool**
  - Description: Update load balancer pool
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **pool_id**: string; required
      - **pool**: dict; required
          - **monitorId**: string;
          - **description**: string;
          - **algorithm**: string;
          - **poolId**: string;
          - **transparent**: boolean;
          - **name**: string;
          - **members**: list;
          - **members_count**: string;
          - **algorithmParameters**: string;
  - cloud providers: vCloud

- **update_load_balancer_virtual_server**
  - Description: Update load balancer virtual server
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **virtual_server_id**: string; required
      - **virtual_server**: dict; required
          - **name**: string;
          - **description**: string;
          - **enabled**: boolean;
          - **enable_service_insertion**: string;
          - **acceleration**: boolean;
          - **ip_address**: string;
          - **protocol**: string;
          - **port**: string;
          - **connection_limit**: string;
          - **connection_rate_limit**: string;
          - **pool_id**: string;
          - **application_profile_id**: string;
          - **application_rules":**: list;
  - cloud providers: vCloud

- **update_nic_public_ip**
  - Description: Update nic public ip
  - body request parameters:
          - **resource_group_name**: string; required
          - **nic_name**: string; required
          - **region**: string; required
          - **operation**: string; required : "assign", "add", "remove", "delete"
          - **public_ip_name**: string; required
          - **allocation_method**: string; required
          - **release**: string;
  - cloud providers: microsoftazure

- **upload_media**
  - Description: Upload media
  - body request parameters:
          - **catalog_name**: string; required
          - **file_path**: string; required
          - **description**: string; required
          - **item_name**: string; required
          - **chunk_bytes**: string;
  - cloud providers: vCloud

- **update_firewall**
  - Description: Update a firewall
  - body request parameters:
      - **region**: string; required, available for amazonaws, microsoftazure, openstack, cloudwatt, flexibleengine
      - **security_group_id**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
      - **method**: string; required, available for amazonaws, [add|remove]
      - **rules**: list; required, available for amazonaws, microsoftazure, openstack, cloudwatt, flexibleengine
          - **googlecloud**: list of dict with the following attrs, required
              - **name**: string, required
              - **action**: string among [allow, deny], required
              - **from**: string degit, required
              - **to**: string degit, required
              - **protocol**: string among [tcp, udp, icmp, esp, ah, ipip, sctp] required
              - **direction**: string among [in, out]
              - **range**: string or list of ip ranges ip; If range are specified, the firewall will apply only to traffic that has source IP address in these ranges.
              - **dstrange**: string or list of ip ranges; If dstrange are specified, the firewall will apply only to traffic that has destination IP address in these ranges.
              - **option**: dict, optional
                - **source_tags: string or list of instance tags to apply the firewall, If source tags are specified, the firewall rule applies only to traffic with source IPs that match the primary network interfaces of VM instances that have the tag and are in the same VPC network. Source tags cannot be used to control traffic to an instance's external IP address, it only applies to traffic between instances in the same virtual network. Because tags are associated with instances, not IP addresses. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
                - **target_tags**: string or list that controls which instances the firewall rule applies to. If targetTags are specified, then the firewall rule applies only to instances in the VPC network that have one of those tags. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
                - **priority**: string degit  between 0 and 65535, required
      - **security_group_name**: string; required, available for microsoftazure
      - **resource_group_name**: string; required, available for microsoftazure
      - **operation**: string; required, available for microsoftazure, openstack, cloudwatt, flexibleengine [add|remove]
          - **add**: param required (region, secgid, rname, rprotocol, fport, tport, iprange, direction, fwp), available for  openstack, cloudwatt
          - **remove**: param required (region, secgid, secgid, rprotocol, fport, tport, iprange, direction, fwp), available for  openstack, cloudwatt
          - **add/remove**: param required (id, name, protocol,from, to, range, direction,ip_type), available for flexibleengine
      - **service_name**: string;  available for microsoftazure
      - **deployment_name**: string;  available for microsoftazure
      - **role_name**: string;  available for microsoftazure
      - **name**: string; available for googlecloud
      - **vnet_id (vnet_name)**: string required,  available for googlecloud
  - cloud providers: amazonaws, openstack, flexibleengine, cloudwatt, microsoftazure, googlecloud.

- **Upload_keypair**
  - Description: Upload a keypair
  - body request parameters:
      - **region**: string; required
      - **key_name**: string; required
      - **key_file**: string; required
  - cloud providers: amazonaws

- **add_firewall**
  - Description: Add firewall
  - body request parameters:
      - **available for vcloud**
          - **vdc_name**: string; required,
          - **gateway_name**: string; required if not gateway_id,
          - **gateway_id**: string; required if not gateway_name,
          - **timeout**: string;
          - **rule**: dict; required,
              - **operation**: string; : add,
              - **name**: string;
              - **action**: string;
              - **protocol**: string;
              - **from**: string;
              - **to**: string;
              - **direction**: string;
              - **range**: string;
              - **destination_ip**: string;
              - **destination_port**: string;
              - **source_ip**: string;
              - **source_port**: string;
      - **available for googlecloud**
          - **name**: string
          - **vnet_id (vnet_name)**: string required
          - **rules**: list of dict with the following attrs, reuired
              - **name**: string, required
              - **action**: string among [allow, deny], required
              - **from**: string degit, required
              - **to**: string degit, required
              - **protocol**: string among [tcp, udp, icmp, esp, ah, ipip, sctp] required
              - **direction**: string among [in, out]
              - **range**: string or list of ip ranges ip; If range are specified, the firewall will apply only to traffic that has source IP address in these ranges.
              - **dstrange**: string or list of ip ranges; If dstrange are specified, the firewall will apply only to traffic that has destination IP address in these ranges.
                  - **option**: dict, optional
                    - **source_tags**: string or list of instance tags to apply the firewall, If source tags are specified, the firewall rule applies only to traffic with source IPs that match the primary network interfaces of VM instances that have the tag and are in the same VPC network. Source tags cannot be used to control traffic to an instance's external IP address, it only applies to traffic between instances in the same virtual network. Because tags are associated with instances, not IP addresses. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
                    - **target_tags**: string or list that controls which instances the firewall rule applies to. If targetTags are specified, then the firewall rule applies only to instances in the VPC network that have one of those tags. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
                    - **priority**: string degit  between 0 and 65535, required
  - cloud providers: vCloud, googlecloud

- **add_ipsec_vpn_tunnel**
  - Description: Add ipsec vpn tunnel
  - body request parameters:
      - **vdc_name**: string; required
      - **gateway_name**: string; required if not gateway_id
      - **gateway_id**: string; required if not gateway_name
      - **tunnel**: string;
  - cloud providers: vCloud

- **add_layer2_distributed_firewall_rule**
  - Description: Add layer2 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required : the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required : vdc id optionel if vdc_name is provided
      - **etag**: string; required : this value is obteined from list action
      - **rule**: dict; required :
          - **disabled**: boolean; true/false, optionel  dafault false
          - **logged**: boolean; true/false, optionel  default false
          - **name**: string; required:
          - **action**: string; required: deny/allow,
          - **direction**: string; required: in/out/inout,
          - **pachet_type**: string; any/ipv4/ipv6, optionel default any
          - **source**: dict;
                - **excluded**: boolean; true/false, optionel default false
                - **sources**: list; list of sources coud be ipadresss or vmids or networkids
                    - **ipaddress**: string;
                    - **vm_id**: string;
                    - **network_id**: string;
          - **destination**: dict;
                - **excluded**: boolean; true/false, optionel default false
                - **destinations**: list; list of destinations coud be ipadresss or vmids or networkids
                    - **ipaddress**: string;
                    - **vm_id**: string;
                    - **network_id**: string;
          - **services**: list;
                - **source_port**: string; port number
                - **destination_port**: string; port number
                - **protocol**: string; required TCP| UDP|ICMP
          - **applied_to**: list;
                - **ipadress**: string;
                - **vm_id**: string;
                - **vdc_id**: string;
                - **network_id**: string;
                - **secgroup_id**: string;
  - cloud providers: vCloud

- **add_layer3_distributed_firewall_rule**
  - Description: Add layer3 distributed firewall rule
  - body request parameters:
      - **vdc_name**: string; required : the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required : vdc id optionel if vdc_name is provided
      - **etag**: string; required : this value is obteined from list action
      - **rule**: dict; required :
          - **disabled**: boolean; true/false, optionel  dafault false
          - **logged**: boolean; true/false, optionel  default false
          - **name**: string; required:
          - **action**: string; required: deny/allow,
          - **direction**: string; required: in/out/inout,
          - **pachet_type**: string; any/ipv4/ipv6, optionel default any
          - **source**: dict;
                - **excluded**: boolean; true/false, optionel default false
                - **sources**: list; list of sources coud be ipadresss or vmids or networkids
                    - **ipaddress**: string;
                    - **vm_id**: string;
                    - **network_id**: string;
          - **destination**: dict;
                - **excluded**: boolean; true/false, optionel default false
                - **destinations**: list; list of destinations coud be ipadresss or vmids or networkids
                    - **ipaddress**: string;
                    - **vm_id**: string;
                    - **network_id**: string;
          - **services**: list;
                - **source_port**: string; port number
                - **destination_port**: string; port number
                - **protocol**: string; required TCP| UDP|ICMP
          - **applied_to**: list;
                - **ipadress**: string;
                - **vm_id**: string;
                - **vdc_id**: string;
                - **network_id**: string;
                - **secgroup_id**: string;
  - cloud providers: vCloud

- **add_load_balancer_application_profile**
  - Description: Add load balancer application profile
  - body request parameters:
      - **vdc_name**: string; required : the vdc name optionel if vdc_name is provided,
      - **vdc_id**: string; required : vdc id optionel if vdc_name is provided
      - **application_profile**: dict; required :
          - **name**: string;
          - **type**: string;
          - **http_redirect**: string;
          - **insert_xforwarded_for**: boolean;
          - **ssl_passthrough**: boolean;
          - **server_ssl_enabled**: string;
          - **persistence**: string;
          - **cookie_name**: string;
          - **cookie_mode**: string;
          - **expire**: string;
  - cloud providers: vCloud

- **add_load_balancer_application_rule**
  - Description: Add load balancer application rule
  - body request parameters:
      - **vdc_name**: string; required :
      - **gateway_name**: string; required if not gateway_id:
      - **gateway_id**: string; required if not gateway_name:
      - **application_rule**: dict; required :
          - **name**: string;
          - **script**: string;
  - cloud providers: vCloud

- **add_load_balancer_monitor**
  - Description: Add load balancer monitor
  - body request parameters:
      - **vdc_name**: string; required :
      - **gateway_name**: string; required if not gateway_id:
      - **gateway_id**: string; required if not gateway_name:
      - **monitor**: dict; required :
          - **name**: string;
          - **type**: string; Select the way in which you want to send the health check request to the serve, possible values HTTP, HTTPS, TCP, ICMP, or UDP.
          - **interval**: string; the interval at which a server is to be monitored using the specified method, in seconds
          - **timeout**: string; the maximum time in seconds within which a response from the server must be received
          - **max_retries**: string;  the number of times the specified monitoring method must fail sequentially before the server is declared down
          - **method**: string; GET|POST|OPTIONS, if type is (HTTP and HTTPS)
          - **url**: string; the URL to be used in the server status request, optional, When you select the POST method, you must specify a value for Send.
          - **expected**: string; the string that the monitor expects to match in the status line of the HTTP or HTTPS response (for example, HTTP/1.1). if type is (HTTP and HTTPS)
          - **send**: string;  the data to be sent., if type is (HTTP, HTTPS, UDP)
          - **receive**: string; the string to be matched in the response content., When Expected is not matched, the monitor does not try to match the Receive content. if type is (HTTP, HTTPS, and UDP)
          - **extension**: string; advanced monitor parameters as key=value pairs. For example, warning=10 indicates that when a server does not respond within 10 seconds, its status is set as warning. All extension items should be separated with a carriage return character. For example: delay=2\n critical=3, its content must be 64bit encoded
  - cloud providers: vCloud

- **add_load_balancer_pool**
  - Description: Add load balancer pool
  - body request parameters:
      - **vdc_name**: string; required :
      - **gateway_name**: string; required if not gateway_id:
      - **gateway_id**: string; required if not gateway_name:
      - **pool**: dict; required :
          - **name**: string;
          - **description**: string;
          - **algorithm**: string; lb algorith method, possible values; round-robin | ip-hash | leastconn | uri | httpheader | url
          - **algorithm_parameters**: string; optional, must be in 64 encoded exemple:  headerName=name, possible if algorithm is url, uri or httpheader.
          - **transparent**: boolean; true/false,  to make client IP addresses visible to the backend servers.
          - **monitor_id**: string;monitor id to associate with this pool.
          - **members**: list; list of member (vm) to associate with this pool
              - **ip_address**: string; ip address value (vm private ip address for example)
              - **weight**: string; the proportion of traffic this member is to handle. Must be an integer in the range 1-256
              - **monitor_port**: string; the port at which the member is to receive health monitor requests
              - **port**: string; the port at which the member (vm) is to receive traffic from the load balancer
              - **max_connection**: string; the maximum number of concurrent connections the member can handle.
              - **min_connection**: string;  the minimum number of concurrent connections a member must always accept.
              - **condition**: string; enabled | disabled, disable or enable the member
  - cloud providers: vCloud

- **add_load_balancer_virtual_server**
  - Description: Add load balancer virtual server
  - body request parameters:
      - **vdc_name**: string; required :
      - **gateway_name**: string; required if not gateway_id:
      - **gateway_id**: string; required if not gateway_name:
      - **virtual_server**: dict; required :
          - **name**: string; a name for the virtual server.
          - **description**: string; a description for the virtual server.
          - **enabled**: boolean; true/false,  to enable the virtual server
          - **enable_service_insertion**: boolean; true/false
          - **acceleration**: boolean; true/false to enable acceleration
          - **ip_address**: string; the IP address that the load balancer listens on.
          - **protocol**: string;  the protocol that the virtual server accepts. You must select the same protocol used by the selected Application Profile
          - **port**: string;  the port number that the load balancer listens on
          - **connection_limit**: string; optional  the maximum concurrent connections that the virtual server can process.
          - **connection_rate_limit**: string; the maximum incoming new connection requests per second
          - **pool_id**: string; the server pool that the load balancer will use
          - **application_profile_id**: string; an application profile to be associated with the virtual server
          - **application_rules**: list; [list of application rule id]
  - cloud providers: vCloud

- **add_nat_rule**
  - Description: Add nat rule
  - body request parameters:
      - **vdc_name**: string; required :
      - **gateway_name**: string; required if not gateway_id:
      - **gateway_id**: string; required if not gateway_name:
      - **name**: string;
      - **protocol**: string;: ex: "tcp",
      - **type**: string;: "SNAT/DNAT",
      - **destination_ip**: string;
      - **to_port**: string;
      - **source_ip**: string;
      - **from_port**: string;: ex: "Any"
  - cloud providers: vCloud

- **associate_floating_ip**
  - Description: Associate floating ip
  - body request parameters:
      - **region**: string; required : available for openstack, cloudwatt, flexibleengine
      - **public_ip_id**: string; required : available for openstack, cloudwatt, flexibleengine
      - **pool**: string; : available for openstack, cloudwatt
      - **instance_id**: string; required : available for openstack, cloudwatt, flexibleengine
      - **type**: string; available for flexibleengine
      - **fixed_address**: string; available for flexibleengine
  - cloud providers: openstack, cloudwatt, flexibleengine.

- **check_storage_account_name_availability**
  - Description: Check storage account name availability
  - body request parameters:
        - **storage_name**: string; required
  - cloud providers: microsoftazure

- **disassociate_floating_ip**
  - Description: Disassociate floating ip
  - body request parameters:
      - **region**: string; required
      - **public_ip_id**: string; required
      - **instance_id**: string; required
  - cloud providers: openstack, cloudwatt, flexibleengine

- **disassociate_public_ip**
  - Description: Disassociate public ip
  - body request parameters:
        - **region**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
        - **release**: boolien; required, available for amazonaws
        - **instance_id**: string; required, available for amazonaws, openstack, cloudwatt, flexibleengine
        - **public_ip**: string; required if not public_ip_id , available for amazonaws
        - **public_ip_id**: string; required if not public_ip, available for amazonaws, openstack, cloudwatt, flexibleengine
        - **port_id**: string; available for flexibleengine
  - cloud providers: openstack, cloudwatt, amazonaws, flexibleengine.

- **enable_distributed_firewall**
  - Description: Enable distributed firewall
  - body request parameters:
      - **vdc_name**: string; required if not vdc_id:
      - **vdc_id**: string; required if not vdc_name:
  - cloud providers: vCloud

- **enable_firewalls**
  - Description: Enable firewalls
  - body request parameters:
        - **vdc_name**: string; required :
        - **gateway_name**: string; required if not gateway_id:
        - **gateway_id**: string; required if not gateway_name:
        - **enable**: boolean;      true/false
  - cloud providers: vCloud

- **enable_ipsec_vpn**
  - Description: Enable ipsec vpn
  - body request parameters:
        - **vdc_name**: string; required :
        - **gateway_name**: string; required if not gateway_id:
        - **gateway_id**: string; required if not gateway_name:
        - **enable**: boolean; true/false
        - **logging_enable**: boolean;
        - **logging_level**: string; "info"
  - cloud providers: vCloud

- **enable_load_balancer**
  - Description: Enable load balancer
  - body request parameters:
        - **vdc_name**: string; required :
        - **gateway_name**: string; required if not gateway_id:
        - **gateway_id**: string; required if not gateway_name:
        - **enable**: boolean; true/false
        - **logging_enable**: boolean;
        - **logging_level**: string; "info"
        - **acceleration**: boolean;
        - **service_insertion**: boolean;
  - cloud providers: vCloud

- **set_usage_export_bucket**
  - Description: Google process provisioner resources
  - body request parameters:
        - **project_id**: string;
        - **bucket**: string;
        - **report_name_prefix**: string;
  - cloud providers: googlecloud


For more details the API is available under the OpenAPI Specification using [Swagger](https://swagger.io/).
