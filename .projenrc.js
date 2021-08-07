const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.117.0',
  defaultReleaseBranch: 'main',
  name: 'ddd-demo-cdk-eks-fargate',
  cdkDependencies: ['@aws-cdk/aws-eks'],
  gitignore: ['.idea'],
  deps: ['cdkeks@0.0.6'],
  license: 'MIT',
  copyrightOwner: 'DevOps@Home',
  description: 'AWS CDK for a serverless EKS cluster using Fargate - demo for DDD Perth 2021',
});
project.synth();