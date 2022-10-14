---
id: 2010
title: Amazon Web Services
description: Clouds Credentials
sidebar_position: 10
---

```
Document version 2.1.0 (2020-10-12)
```

There is two ways to onboard an AWS account into UIC platform: 
- IAM User with Access Key and Secret Key
- Role based Access (Cross-account trust relationship)

## Creating a Policy
Log in to your AWS account, enter your user ID, root/ admin password.
Once entered, the home page will be displayed, from the **Identity and Access Management (IAM)** service, select **Policies** on the left menu. 

![Image](/img_UIC_Provider_Cred_Settings/awsimage017.png#bordered)

- Click the Create Policy button, and then paste the json below:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "iam:GetUser",
        "iam:GetPolicy",
        "iam:GetRole",
        "iam:ListRoles",
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "iam:PutRolePolicy",
        "iam:CreatePolicy",
        "organizations:ListParents",
        "organizations:ListAccounts",
        "sts:AssumeRole",
        "ce:GetSavingsPlansPurchaseRecommendation",
        "ce:GetCostAndUsage",
        "ce:GetReservationPurchaseRecommendation",
        "ce:GetReservationUtilization",
        "ce:GetDimensionValues",
        "ce:GetSavingsPlansUtilizationDetails",
        "ce:GetAnomalySubscriptions",
        "ce:GetReservationCoverage",
        "ce:GetAnomalyMonitors",
        "ce:GetUsageForecast",
        "ce:DescribeCostCategoryDefinition",
        "ce:GetSavingsPlansCoverage",
        "ce:GetRightsizingRecommendation",
        "ce:GetCostAndUsageWithResources",
        "ce:GetSavingsPlansUtilization",
        "ce:GetAnomalies",
        "ce:ListCostCategoryDefinitions",
        "ce:GetCostForecast",
        "ce:GetTags",
        "budgets:*",
        "pricing:*",
        "sns:*",
        "ec2:*",
        "gamelift:DescribeEC2InstanceLimits",
        "elasticloadbalancing:*",
        "autoscaling:*",
        "cloudwatch:ListMetrics",
        "cloudwatch:PutMetricAlarm",
        "cloudwatch:DescribeAlarms"
      ],
      "Resource": "*"
    }
  ]
}
```
- Name this policy **UICPolicy**

## Billing Data Access
The billing data access is optional if you do not need to analyze your billing AWS data.

###  Creating a Policy
To display AWS billing on the UIC platform, we need to create two policies called **"uicBillingViewAccess"** and **"FinOpsAccess"**.
- Click the Create Policy button, and then paste the json below:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "aws-portal:ViewAccount",
                "aws-portal:ViewBilling",
                "aws-portal:ViewPaymentMethods",
                "aws-portal:ViewUsage"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow",
            "Sid": ""
        }
    ]
}
```
![Image](/img_UIC_Provider_Cred_Settings/awsimage018.png#bordered)

- Click on the button Review Policy, the following screen appears:

![Image](/img_UIC_Provider_Cred_Settings/awsimage019.png#bordered)

- Enter the following name for the policy: **uicBillingViewAccess**, the click on the button Create policy
- Repeat those steps for the FinOpsAccess policy with the following json:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "sts:AssumeRole",
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "ce:GetCostAndUsage",
        "iam:PutRolePolicy",
        "ce:GetReservationPurchaseRecommendation",
        "ce:GetReservationUtilization",
        "ce:GetSavingsPlansPurchaseRecommendation",
        "ce:GetDimensionValues",
        "ce:GetSavingsPlansUtilizationDetails",
        "ce:GetAnomalySubscriptions",
        "ce:GetReservationCoverage",
        "ce:GetAnomalyMonitors",
        "ce:GetUsageForecast",
        "ce:DescribeCostCategoryDefinition",
        "iam:GetRole",
        "ce:GetRightsizingRecommendation",
        "iam:GetPolicy",
        "iam:ListRoles",
        "budgets:*",
        "ce:GetSavingsPlansUtilization",
        "ce:GetAnomalies",
        "ce:ListCostCategoryDefinitions",
        "ce:GetCostForecast",
        "iam:CreatePolicy",
        "sts:AssumeRole",
        "organizations:ListAccounts",
        "ce:GetCostAndUsageWithResources",
        "organizations:ListParents",
        "pricing:*",
        "iam:GetUser",
        "ce:GetSavingsPlansCoverage",
        "ce:GetTags"
      ],
      "Resource": "*"
    }
  ]
}
```
### Enable access to billing data 
You can grant IAM users and federated users with roles, the permission to access billing information. This includes access to **account settings, Payment Methods** and **Report**. You define users and authorized roles to view billing information by creating IAM policies.

Connect to AWS website, enter your user login (having the administration right of your account) and your password. The home page appears. In the top right tab, click on **My Account**. See picture below 

![Image](/img_UIC_Provider_Cred_Settings/awsimage020.png#bordered)

Scroll down and click on **IAM User and Role Access to Billing Information**, then check on **Activate IAM Access**:

![Image](/img_UIC_Provider_Cred_Settings/awsimage021.png#bordered)

Click on the button **Update**.
After this change, you can add the first policy previously created **"UICpolicy"** to the users of your choice. (see section 6.3 below)

## IAM User Access
### Creating a user 
Log in to the AWS Administration Console open the IAM console at https://console.aws.amazon.com/iam/. 
On the left menu, choose **Users** then **Add user**.
 
![Image](/img_UIC_Provider_Cred_Settings/awsimage022.png#bordered)
The following page appears:

![Image](/img_UIC_Provider_Cred_Settings/awsimage023.png#bordered) 

- Enter the user name to inside **User name** input,
- Select the desired **Access type**. For UIC, **Programmatic Access** must be allowed.
- Click on the button next: **Permission**, the following screen appears:

![Image](/img_UIC_Provider_Cred_Settings/awsimage024.png#bordered)
 
- Select the button **Attach existing policies directly** to proceed to the attachment,
- check the policy(s) you want to attach to the user (**UICPolicy, FinOpsAccess**)

### Setting permissions boundary
To control a user’s permission limit, a permission boundary must be set.
- Check Use a permissions boundary to control the maximum user permission, then select the policy created,

![Image](/img_UIC_Provider_Cred_Settings/awsimage025.png#bordered)

- Click on the button **Next: Tags** (adding tags is optional), the following page appears:  

![Image](/img_UIC_Provider_Cred_Settings/awsimage026.png#bordered) 

- Click on the button **Next: Review**, the next page appears:  
- Click on the button **Create user**, the following message appears:

![Image](/img_UIC_Provider_Cred_Settings/awsimage027.png#bordered)
 
- Click on **Show (access key ID)** then copy/paste it in UIC interface or in a file as you wish,
- Click on **Show (Secret access key)** then copy/paste it in UIC interface or in a file as you wish,
- You can also click on the **Download.csv** button to download the file which contains the access key ID and the secret access key (rootkey.csv)
- Save the file in a safe location. 

### Retrieve AWS credentials (existing user)
Login to AWS Management Console. Insert your account name in the provided text box.
- In the top right tab **My account**, click on **My Security Credentials**. See picture below: 

![Image](/img_UIC_Provider_Cred_Settings/awsimage028.png#bordered)

- The following page appears:

![Image](/img_UIC_Provider_Cred_Settings/awsimage029.png#bordered)

- Select AWS IAM credentials tab.
- Click on the button Create access key, if this button is deactivated, you must delete one of your existing access keys before creating a new key.
For further information, consult [Limitations on IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html) and Objects in the IAM User Guide.

:::note
A warning indicates that this is the only time you will be able to view or download the secret access key. You will not be able to retrieve it later (but you can create new access keys at any time).
:::
- Choose Show secret access key to view or copy the access key ID and the Secret access key.
- Choose Download .csv file, it contains a key file to download the rootkey.csv file which contains the access key and the secret key. Save this file in a secure location.

![Image](/img_UIC_Provider_Cred_Settings/awsimage030.png#bordered)

## Role base Access
Securely connect your AWS account with UIC. Create an IAM role, establish trust relationship and enable cross account access between your AWS account and UIC's AWS account by following the below mentioned steps.

### Create role
Log in to the **AWS Management Console** and open the *AWS IAM console*. In the navigation pane click on ***Roles*** and then choose Create role.

![Image](/img_UIC_Provider_Cred_Settings/awsimage031.png#bordered)
 
Establish Trust
- Select **Another AWS account** as the type of trusted entity.
- Type in UIC's AWS account ID  **760211127657** in the **Account ID** field.

![Image](/img_UIC_Provider_Cred_Settings/awsimage032.png#bordered)

- Check the ***Require external ID*** field option
- Type in the **External ID** (The External ID is displayed in the Integrate AWS Account form) and click on ***Next: Permissions***
 
- Make sure the **"Require MFA"** option remains unchecked and click on **"Next: Permissions"**

![Image](/img_UIC_Provider_Cred_Settings/awsimage033.png#bordered)

### Attach Permissions
In the **Attach permissions** policy section, search for the newly created policy **UICpolicy** and FinOpsAccess (see section 3.2 below), select it and click on **"Next:Review"**.

### Review
- Type a unique name in the **Role name** field for exemple **TrustUICRole**.
- Review the information configured - Trusted entities and policies, if everything is in order, click on **Create Role**. Once done, a **Role ARN** will be created for the cross-account IAM role you created.
Now you have the required attributes to setup your AWS account under UIC platform which are:
- trusted_account_id: your AWS account id
- trusted_role: **TrustUICRole**
- trusted_external_id: **20203061236**

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **Amazon Web Services** and then click **Add credentials**.
If the selected **Type** is ***AWS Access Keys***:

![Image](/img_UIC_Provider_Cred_Settings/awsimage034.png#bordered)

The settings screen has a form that allows you to configure:
- **Credentials name***: The credential name must be unique.
- **Type***: AWS Access Keys
- **Access key***: Set Access key
- **Secret key***: Set Secret key
- **Regions to activate**: Select regions
- **Default region***: Select region
- **Proxy**: The proxy URL must be in the following format, ```https://user.password@host.port```.

Select **Add**.

If the selected **Type** is ***AWS Cross-Account Trust Relationship***:

![Image](/img_UIC_Provider_Cred_Settings/awsimage035.png#bordered)

The settings screen has a form that allows you to configure:
- **Credentials name***: The credential name must be unique.
- **Type***: AWS Cross-Account Trust Relationship
- **Role to assume to access your account***: Set the Role ARN
- **External ID**: Set External ID
- **Account ID***: Set Account ID
- **Regions to activate**: Select regions
- **Default region***: Select region
- **Proxy**: The proxy URL must be in the following format, ```https://user.password@host.port```

Select **Add**.

## Finops mode
For Finops mode, we need the following actions.

### Creating a Policy
To display AWS billing on the UIC platform, we need to create two policies called **"uicBillingViewAccess"** and **"FinOpsAccess"**.
- Click the Create Policy button, and then paste the json below:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "aws-portal:ViewAccount",
                "aws-portal:ViewBilling",
                "aws-portal:ViewPaymentMethods",
                "aws-portal:ViewUsage"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow",
            "Sid": ""
        }
    ]
}
```
![Image](/img_UIC_Provider_Cred_Settings/awsimage036.png#bordered)

- Click on the button Review Policy, the following screen appears:
![Image](/img_UIC_Provider_Cred_Settings/awsimage037.png#bordered)

- Enter the following name for the policy: uicBillingViewAccess, the click on the button Create policy
- Repeat those steps for the FinOpsAccess policy with the following json:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "sts:AssumeRole",
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "ce:GetCostAndUsage",
        "iam:PutRolePolicy",
        "ce:GetReservationPurchaseRecommendation",
        "ce:GetReservationUtilization",
        "ce:GetSavingsPlansPurchaseRecommendation",
        "ce:GetDimensionValues",
        "ce:GetSavingsPlansUtilizationDetails",
        "ce:GetAnomalySubscriptions",
        "ce:GetReservationCoverage",
        "ce:GetAnomalyMonitors",
        "ce:GetUsageForecast",
        "ce:DescribeCostCategoryDefinition",
        "iam:GetRole",
        "ce:GetRightsizingRecommendation",
        "iam:GetPolicy",
        "iam:ListRoles",
        "budgets:*",
        "ce:GetSavingsPlansUtilization",
        "ce:GetAnomalies",
        "ce:ListCostCategoryDefinitions",
        "ce:GetCostForecast",
        "iam:CreatePolicy",
        "sts:AssumeRole",
        "organizations:ListAccounts",
        "ce:GetCostAndUsageWithResources",
        "organizations:ListParents",
        "pricing:*",
        "iam:GetUser",
        "ce:GetSavingsPlansCoverage",
        "ce:GetTags"
      ],
      "Resource": "*"
    }
  ]
}
```

## Inventory mode
For Inventory mode, we need the following actions.

### Creating a Policy
For inventory ReadOnlyAccess policy is required. Log in to your  AWS account, enter your user ID, root/ admin password.
Once entered, the home page will be displayed, from the **Identity and Access Management (IAM)** service, select **Policies** on the left menu.

![Image](/img_UIC_Provider_Cred_Settings/awsimage038.jpg#bordered)

- Search the ReadOnlyAccess if it is available under your IAM policies.
- You can modify it, or create your own policy, if you are skilled in using the default ReadOnlyAccess policy.

