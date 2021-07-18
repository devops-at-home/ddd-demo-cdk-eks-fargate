import * as eks from '@aws-cdk/aws-eks';
import { App, Construct, Stack, StackProps } from '@aws-cdk/core';
import * as cdkeks from 'cdkeks';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const cluster = new eks.FargateCluster(this, 'ddd-demo-cluster', {
      version: eks.KubernetesVersion.V1_20,
      defaultProfile: {
        selectors: ['default', 'kube-system', 'demo'].map((ns) => {
          return { namespace: ns };
        }),
      },
    });

    new cdkeks.Platform(this, 'Platform', {
      cluster,
      addons: [new cdkeks.AwsLoadBalancerControllerAddon()],
    });
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'ddd-demo', { env: devEnv });

app.synth();
