---
project: wonnx
stars: 1680
description: A WebGPU-accelerated ONNX inference run-time written 100% in Rust, ready for native and the web
url: https://github.com/webonnx/wonnx
---

Wonnx is a GPU-accelerated ONNX inference run-time written 100% in Rust, ready for the web.

Supported Platforms (enabled by `wgpu`)
---------------------------------------

API

Windows

Linux & Android

macOS & iOS

Vulkan

✅

✅

Metal

✅

DX12

✅ (W10 only)

DX11

🚧

GLES3

🆗

✅ = First Class Support — 🆗 = Best Effort Support — 🚧 = Unsupported, but support in progress

Getting started
---------------

### From the command line

Ensure your system supports either Vulkan, Metal or DX12 for access to the GPU. Then either download a binary release, or install Rust and run `cargo install --git https://github.com/webonnx/wonnx.git wonnx-cli` to install the CLI.

The CLI tool (`nnx`) provides a convenient interface for tinkering with models (see the README for more information):

nnx info ./data/models/opt-squeeze.onnx
nnx infer ./data/models/opt-squeeze.onnx -i data=./data/images/pelican.jpeg --labels ./data/models/squeeze-labels.txt --top 3

### From Rust

Add the `wonnx` crate as dependency (`cargo add wonnx` if you have cargo-add). Then, see the examples for usage examples, or browse the API docs.

### From Python

pip install wonnx

And then, to use:

from wonnx import Session
session \= Session.from\_path(
    "../data/models/single\_relu.onnx"
)
inputs \= {"x": \[\-1.0, 2.0\]}
assert session.run(inputs) \== {"y": \[0.0, 2.0\]}

Then run `python3` with the above Python code!

For more details on the Python package including build instructions, see wonnx-py.

### In the browser, using WebGPU + WebAssembly

npm install @webonnx/wonnx-wasm

And then, on the client side:

import init, { Session, Input } from "@webonnx/wonnx-wasm";

// Check for WebGPU availability first: if(navigator.gpu) { .. }
await init();
const session \= await Session.fromBytes(modelBytes /\* Uint8Array containing the ONNX file \*/);
const input \= new Input();
input.insert("x", \[13.0, \-37.0\]);
const result \= await session.run(input); // This will be an object where the keys are the names of the model outputs and the values are arrays of numbers.
session.free();
input.free();

The package @webonnx/wonnx-wasm provides an interface to WONNX, which is included as WebAssembly module and will use the browser's WebGPU implementation. See wonnx-wasm-example for a more complete usage example involving a bundler.

For more details on the JS/WASM package including build instructions, see wonnx-wasm.

### For development

To work on wonnx itself, follow the following steps:

-   Install Rust
-   Install Vulkan, Metal, or DX12 for the GPU API.
-   git clone this repo.

git clone https://github.com/webonnx/wonnx.git

Then, you're all set! You can run one of the included examples through cargo:

cargo run --example squeeze --release

Running other models
--------------------

-   To run an onnx model, first simplify it with `nnx prepare` (substitute with `cargo run -- prepare` when inside this repo):

nnx prepare -i ./some-model.onnx ./some-model-prepared.onnx

To specify dynamic dimension parameters, add e.g. `--set batch_size=1`.

You can also use an external tool, such as onnx-simplifier, with the command:

# pip install -U pip && pip install onnx-simplifier
python -m onnxsim mnist-8.onnx opt-mnist.onnx

-   Then you can run it using the CLI (see README or programmatically, following the examples in the examples folder. To run an example:

cargo run --example mnist --release

Tested models
-------------

-   Squeezenet
-   MNIST
-   BERT

GPU selection
-------------

Except when running in WebAssembly, you may set the following environment variables to influence GPU selection by WGPU:

-   `WGPU_ADAPTER_NAME` with a substring of the name of the adapter you want to use (e.g. `1080` will match `NVIDIA GeForce 1080ti`).
-   `WGPU_BACKEND` with a comma separated list of the backends you want to use (`vulkan`, `metal`, `dx12`, `dx11`, or `gl`).
-   `WGPU_POWER_PREFERENCE` with the power preference to choose when a specific adapter name isn't specified (`high` or `low`)

Contribution: On implementing a new Operator
--------------------------------------------

Contributions are very much welcomed even without large experience in DL, WGSL, or Rust. I hope that this project can be a sandbox for all of us to learn more about those technologies beyond this project's initial scope.

To implement an operator all you have to do is:

1.  Add a new matching pattern in `compiler.rs`
2.  Retrieve its attributes values using the `get_attribute` function:

    let alpha = get\_attribute("alpha", Some(1.0), node);
    // or without default value
    let alpha = get\_attribute::<f32\>("alpha", None, node);

1.  Add any variable you want to use in the WGSL shader using `context`.
2.  Write a new WGSL template in the `templates` folder.

> Available types are in `structs.wgsl` but you can also generate new ones within your templates.

1.  Respect the binding layout that each entry is incremented by 1 starting from 0, with input first and output last. If the number of binding is above 4. Increment the binding group. You can change the input within `sequencer.rs`
2.  Write the logic.

There is default variables in the context:

-   `{{ i_lens[0] }}`: the length of the input 0. This also work for output: `{{ o_lens[0] }}` and other input `{{ i_lens[1] }}`
-   `{{ i_shape[0] }}`: the array of dimensions of input 0. To get the first dimension of the array, just use: `{{ i_shape[0][0] }}`
-   `{{ i_chunks[0] }}`: the size of the chunks of each dimensions of input 0. By default, each variable is represented as a long array of values where to get to specific values you have to move by chunks. Those chunks are represented within this variable. To get the size of the chunks of the first dimensions use: `{{ i_chunks[0][0] }}`.
-   `{{ op_type }}` the op type as some op\_type like activation are using the same template.

1.  Test it using the utils function and place it in the tests folder. The test can look as follows:

#\[test\]
fn test\_matmul\_square\_matrix() {
    // USER INPUT

    let n = 16;
    let mut input\_data = HashMap::new();

    let data\_a = ndarray::Array2::eye(n);
    let mut data\_b = ndarray::Array2::<f32\>::zeros((n, n));
    data\_b\[\[0, 0\]\] = 0.2;
    data\_b\[\[0, 1\]\] = 0.5;

    let sum = data\_a.dot(&data\_b);

    input\_data.insert("A".to\_string(), data\_a.as\_slice().unwrap());
    input\_data.insert("B".to\_string(), data\_b.as\_slice().unwrap());

    let n = n as i64;
    let model = model(graph(
        vec!\[tensor("A", &\[n, n\]), tensor("B", &\[n, n\])\],
        vec!\[tensor("C", &\[n, n\])\],
        vec!\[\],
        vec!\[\],
        vec!\[node(vec!\["A", "B"\], vec!\["C"\], "MatMul", "MatMul", vec!\[\])\],
    ));

    let session =
        pollster::block\_on(wonnx::Session::from\_model(model)).expect("Session did not create");

    let result = pollster::block\_on(session.run(input\_data)).unwrap();

    // Note: it is better to use a method that compares floats with a tolerance to account for differences
    // between implementations; see \`wonnx/tests/common/mod.rs\` for an example.
    assert\_eq!((&result\["C"\]).try\_into().unwrap(),sum.as\_slice().unwrap());
}

> Check out tera documentation for other templating operation: https://tera.netlify.app/docs/

1.  If at any point you want to do optimisation of several nodes you can do it within `sequencer.rs`.

Supported Operators (ref ONNX IR)
---------------------------------

**Operator**

**Since version**

**Implemented**

**Shape inference supported**

Abs

13, 6, 1

✅

✅

Acos

7

✅

✅

Acosh

9

✅

✅

Add

14, 13, 7, 6, 1

✅

✅

And

7, 1

✅

ArgMax

13, 12, 11, 1

ArgMin

13, 12, 11, 1

Asin

7

✅

✅

Asinh

9

✅

✅

Atan

7

✅

✅

Atanh

9

✅

✅

AveragePool

11, 10, 7, 1

✅

✅

BatchNormalization

15, 14, 9, 7, 6, 1

✅

✅

BitShift

11

Cast

13, 9, 6, 1

✅

✅

Ceil

13, 6, 1

✅

✅

Clip

13, 12, 11, 6, 1

✅

✅

Compress

11, 9

Concat

13, 11, 4, 1

✅

✅

ConcatFromSequence

11

Constant

13, 12, 11, 9, 1

✅

✅

ConstantOfShape

9

✅

✅

Conv

11, 1

✅

ConvInteger

10

ConvTranspose

11, 1

Cos

7

✅

✅

Cosh

9

✅

✅

CumSum

14, 11

DepthToSpace

13, 11, 1

DequantizeLinear

13, 10

Det

11

Div

14, 13, 7, 6, 1

✅

✅

Dropout

13, 12, 10, 7, 6, 1

✅

✅

Einsum

12

Elu

6, 1

✅

✅

Equal

13, 11, 7, 1

✅

Erf

13, 9

✅

✅

Exp

13, 6, 1

✅

✅

Expand

13, 8

EyeLike

9

Flatten

13, 11, 9, 1

✅

✅

Floor

13, 6, 1

✅

✅

GRU

14, 7, 3, 1

Gather

13, 11, 1

✅ (axis=0)

✅

GatherElements

13, 11

GatherND

13, 12, 11

Gemm

13, 11, 9, 7, 6, 1

✅\*

GlobalAveragePool

1

✅

✅

GlobalLpPool

2, 1

GlobalMaxPool

1

Greater

13, 9, 7, 1

✅

GridSample

16

HardSigmoid

6, 1

✅

✅

Hardmax

13, 11, 1

Identity

16, 14, 13, 1

✅

✅

If

16, 13, 11, 1

InstanceNormalization

6, 1

IsInf

10

IsNaN

13, 9

LRN

13, 1

LSTM

14, 7, 1

LeakyRelu

6, 1

✅

✅

Less

13, 9, 7, 1

✅

Log

13, 6, 1

✅

✅

Loop

16, 13, 11, 1

LpNormalization

1

LpPool

11, 2, 1

MatMul

13, 9, 1

✅

MatMulInteger

10

Max

13, 12, 8, 6, 1

MaxPool

12, 11, 10, 8, 1

✅

✅

MaxRoiPool

1

MaxUnpool

11, 9

Mean

13, 8, 6, 1

Min

13, 12, 8, 6, 1

✅

Mod

13, 10

✅

✅

Mul

14, 13, 7, 6, 1

✅

✅

Multinomial

7

Neg

13, 6, 1

✅

✅

NonMaxSuppression

11, 10

NonZero

13, 9

Not

1

✅

OneHot

11, 9

✅ (axis=-1)

Optional

15

OptionalGetElement

15

OptionalHasElement

15

Or

7, 1

✅

PRelu

9, 7, 6, 1

✅

Pad

13, 11, 2, 1

✅ (mode=constant, pads>=0)

Pow

15, 13, 12, 7, 1

✅ (broadcast=0 and data type is f32)

✅

QLinearConv

10

QLinearMatMul

10

QuantizeLinear

13, 10

RNN

14, 7, 1

RandomNormal

1

RandomNormalLike

1

RandomUniform

1

RandomUniformLike

1

Reciprocal

13, 6, 1

✅

✅

ReduceL1

13, 11, 1

✅

✅

ReduceL2

13, 11, 1

✅

✅

ReduceLogSum

13, 11, 1

✅

✅

ReduceLogSumExp

13, 11, 1

✅

✅

ReduceMax

13, 12, 11, 1

✅

✅

ReduceMean

13, 11, 1

✅

✅

ReduceMin

13, 12, 11, 1

✅

✅

ReduceProd

13, 11, 1

✅

✅

ReduceSum

13, 11, 1

✅

✅

ReduceSumSquare

13, 11, 1

✅

✅

Relu

14, 13, 6, 1

✅

✅

Reshape

14, 13, 5, 1

✅

✅

Resize

13, 11, 10

✅

ReverseSequence

10

RoiAlign

16, 10

Round

11

Scan

11, 9, 8

Scatter (deprecated)

11, 9

ScatterElements

16, 13, 11

ScatterND

16, 13, 11

Selu

6, 1

SequenceAt

11

SequenceConstruct

11

SequenceEmpty

11

SequenceErase

11

SequenceInsert

11

SequenceLength

11

Shape

15, 13, 1

✅

✅

Shrink

9

Sigmoid

13, 6, 1

✅

Sign

13, 9

✅

✅

Sin

7

✅

✅

Sinh

9

✅

✅

Size

13, 1

✅

✅

Slice

13, 11, 10, 1

✅

Softplus

1

✅

Softsign

1

✅

SpaceToDepth

13, 1

Split

13, 11, 2, 1

SplitToSequence

11

Sqrt

13, 6, 1

✅

✅

Squeeze

13, 11, 1

✅

✅

StringNormalizer

10

Sub

14, 13, 7, 6, 1

✅

✅

Sum

13, 8, 6, 1

Tan

7

✅

✅

Tanh

13, 6, 1

✅

✅

TfIdfVectorizer

9

ThresholdedRelu

10

Tile

13, 6, 1

TopK

11, 10, 1

Transpose

13, 1

✅

✅

Trilu

14

Unique

11

Unsqueeze

13, 11, 1

✅

✅

Upsample (deprecated)

10, 9, 7

Where

16, 9

Xor

7, 1

**Function**

**Since version**

Bernoulli

15

CastLike

15

Celu

12

✅

✅

DynamicQuantizeLinear

11

GreaterOrEqual

12

✅

HardSwish

14

LessOrEqual

12

✅

LogSoftmax

13, 11, 1

MeanVarianceNormalization

13, 9

NegativeLogLikelihoodLoss

13, 12

Range

11

✅

Softmax

13, 11, 1

✅

SoftmaxCrossEntropyLoss

13, 12

### Known limitations

-   The `Clip`, `Resize`, `Reshape`, `Split`, `Pad` and `ReduceSum` ops accept (typically optional) secondary inputs to set various parameters (i.e. axis). These inputs are only supported if they are supplied as initializer tensors (i.e. do not depend on inputs and are not outputs of other ops), because wonnx pre-compiles all operations to shaders in advance (and must know these parameters up front).
    
-   Internally 64-bit integers are not supported (the reason is they are not supported in the current version of WGSL); inputs and initializers with 64-bit scalars are converted to 32-bit values (possibly overflowing).
    
-   For `MatMul` and `Gemm`, the matrix dimensions must be divisible by 2, or the output matrix must be of size (1, N). Matrix multiplication only supports floats, not integers (this is a WebGPU/WGSL limitation).
    

### Shape inference

WONNX needs to know the shape of input and output tensors for each operation in order to generate shader code for executing it. ONNX models however do not always contain this information for intermediate values. Shape inference is the process of deducing the shape of intermediate values from the shape of inputs and outputs and the characteristics of each operation.

WONNX supports a limited form of shape inference (the process of determining what the shapes are of the various nodes in a model's graph). Shape inference is available programmatically as well as through the CLI. Before shape inference can be performed, all dynamic dimension parameters need to be replaced with static values. Shape inference only infers output shapes from input shapes for specific supported ops (see the table above). Inference cannot succeed if the shape for any input of a node is not known. Nodes that already have fully defined shapes for their outputs are left unchanged (and the outputs are used for shape inference on nodes that use these outputs as inputs).

To perform shape inference using the CLI, run a command similar to this (here `batch_size` and `sequence_length` are dynamic dimension parameters; the `-i` flag enables shape inference):

nnx prepare model.onnx model-prepared.onnx --set batch\_size=1 --set sequence\_length=255 -i

To perform shape inference programmatically, use `apply_dynamic_dimensions` and `infer_shapes` from the `wonnx_preprocessing::shape_inference` module.

### Constant folding

Some models contain subgraphs whose output can be determined statically, as they do not depend on the specific inputs provided during inference. WONNX can replace such constant intermediate values with static values ('constant folding'). This is supported in the following cases:

-   Output of nodes of the `Constant` op type (these are replaced with initializers)
-   Output of nodes of the `Shape` op type where the shape of the input is known (up front or during inference)
-   Output of nodes of which all inputs are constant (possibly after folding), _and_ for which the operator is supported by WONNX.

Constant folding is performed as part of shape inference, unless disabled (from the CLI pass `--no-fold-constants` to disable). This is done in order to support models that dynamically calculate shapes using operators such as `Shape`/`Squeeze`/`Unsqueeze` depending on dynamically set dimension parameters (e.g. batch size).

License
-------

Licensed under either of

-   Apache License, Version 2.0 (LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0)
-   MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT) at your option.

Except for the following files:

-   `data/models`:
    
    -   `mobilenetv2-7.onnx`: source, Apache-2.0 license only.
    -   `squeezenet-labels.txt`: source, Apache-2.0 license only.
-   `data/images`:
    
    -   `pelican.jpeg`: source, (C) Rui Ornelas, CC-BY 2.0.
    -   `bald_eagle.jpeg`: source, (C) David R. Tribble, CC BY-SA 4.0

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you shall be dual licensed as above, without any additional terms or conditions.
