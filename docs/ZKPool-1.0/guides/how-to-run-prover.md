---
sidebar_label: 'How to Run a Prover'
sidebar_position: 3
---

# How to Run a Prover

This document explains how to run a ZKPool prover.

After logging into ZKPool, follow the guide on how to connect to ZKPool and run a prover.
![image](https://github.com/aoraki-labs/zkpool-doc/assets/117819366/5b9ebf70-332f-47c4-bc35-f2e914982f49)




The basic flow is as follows:

1. Choose your operating system: Ubuntu 20.04/22.04 or MacOS ARM or MacOS x86.
2. Choose between CPU or GPU (coming soon).
3. Generate an access key for your account.
4. Follow one command to download your keys and the prover binary, and then run the prover binary.

## Network Selection
To run the current ZKPool prover, please connect to the HOLESKY testnet in your wallet.
For instructions on how to add the Holesky testnet, please refer to https://chainlist.org/chain/17000

## How to Stop a Prover

To stop a running prover, simply run the following command

```shell
pkill zkpool-prover
```
