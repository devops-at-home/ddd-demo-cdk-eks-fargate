# ddd-demo-cdk-eks-fargate

AWS CDK for a serverless EKS cluster using Fargate - demo for DDD Perth 2021

## Architecture

![Architecture](https://github.com/devops-at-home/ddd-demo-cdk-eks-fargate/raw/main/doc/architecture.jpg)

## Requirements

- NodeJS 14, NPM, and Yarn installed
- AWS CLI installed and configured with credentials
- AWS CDK installed globally
- CDK toolkit bootstrapped into target AWS account

For further information please see [Getting started with the AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)

## Commands

### Build and run tests

```
yarn install
yarn build
```

### Update tests

```
yarn test -u
```

### Deploy stack

```
yarn deploy
```

### Destroy stack

```
yarn destroy
```
