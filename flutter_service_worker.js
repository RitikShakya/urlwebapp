'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ce964d2df4d04ba47bf6a683eff1aa83",
"version.json": "db494c01ff14487a0ab209ea6e3194fa",
"index.html": "28d31f51aa0fae77cc68f2ebd768ec7f",
"/": "28d31f51aa0fae77cc68f2ebd768ec7f",
"main.dart.js": "4fb62144019eb4fd6b5ea0a27b55c973",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8ca9b3df47688c20dbe2c5fdbde32ee7",
".git/config": "4557710f1265c6b740a66cb52bdbf34b",
".git/objects/95/aa1100368d70b1dc09f34cb12c8b2af6e564bf": "fc1ccf07222c391488626f88f7a33266",
".git/objects/59/ae42a0ff45c396a8623344e93dccc75c814a83": "c5d0c2c59d52a50ac01a6f54c2daf11c",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/d3de919746c92716e7cc395a15f25dc8184ced": "efec9b72cd36ad433d7d460786ff15d8",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/bba1b40ac5f2cfbcb79a0e5f8b9c94d96d329a": "0072edc8967a88352a0a7ced2542457b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/a649a41ef7b0274bde80b6da0c1dd36e6eca49": "f56c0d2b2485f139097acdea3d270615",
".git/objects/6a/ba1f5f511d19e2fca836c08d023697273157e5": "6b79ceeef07be8d798afea027a2d5801",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/02cb3041c5a5b06d2583b56a213126660148cb": "4247f06208f312f80518f3169251b2b7",
".git/objects/35/f8b50d6faf2291e79903081c736f03f1f0a8c0": "4db268f5d0706dd620d59fcc44898831",
".git/objects/3c/c35ee07f6a74b868f0507f90727464d9fd8c56": "e2ffb2264351078ef10fb5b5abe2efd4",
".git/objects/93/4fd305f7e4c8f0a45787db4e0e7b6f4ae09593": "5fcfba79fca6eb8157953c5c1db9258a",
".git/objects/5a/46b5b39fcdd2777bc2d8652545c3b306706ff2": "8db7cde6d1797173076a8c66f4593480",
".git/objects/33/0696e9bd0ee037fbd18e7c833d99893c686929": "0183925aa5e4c6b72b7660af0fc611a6",
".git/objects/05/1052421a789615855417c1466085c78716aa81": "0c2aabeff18acf05b93acd5c6faeb364",
".git/objects/9c/b4693cd4346f838df45d0f6a8364eff6f2ade5": "0aadadbf83ad5a3c0a1c64e90fd8d7bd",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/02/bcb08412acd485724a4240ba5c53495eb974df": "522052fcc396fd642dc2b3f73063393a",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/b2/2db93d2f6c13cb40375223bba2f2a30dd3f985": "d161411cb76b66efa93c05188ac9ba3b",
".git/objects/d9/353c2848d205faa9977e97181c86519ab1e6c9": "1dd28b6995d2ac6e3f9d48dab469e129",
".git/objects/bb/3b79fe010e46b47005e74eb51f4c2eab49d351": "dad7fabe14c215e93c3ba89fd25791fc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/7ec98692479280dd29ec2bdfe633a33c05b26f": "bf4b688b89eb1d86efcfdf42b7fbba8e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/feb3c31d8dc3780472ff15116c6a39918fc774": "268517f289431b99d59259106293c76c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e6e842f127d2e1ca984dd71b76a98da2d56de8": "4c8f0fdba80d9d1585491bb795c469d6",
".git/objects/f4/4e018d8616972f6824bf57cdf73eca924ef48e": "313e3a4cea0aee1e03e3e452ae798057",
".git/objects/f3/f1414ff58d911bd968f960f749e048ed8f7ac6": "bef5edec2b95c012a9609176dd85df42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8934b2810bd94245b141523fa3060b504166a9": "fe1b63286c90e29a0ad5547a5bbfc4be",
".git/objects/f5/25b6d8221a5508bf12aaa8e02e9832c3887e11": "ccf81bb75d8652be024b0e4a1310ab3c",
".git/objects/c8/3537dd659d18b933c633de9a750e3cb2cf28de": "b8c10a520607c530ae11b38a14b1c786",
".git/objects/fb/ab19d199af8ae03f57f93fcaadf188eb932b03": "cfa4a6750d352b8f5f1047d6770c91d8",
".git/objects/c1/b01a41b2c1be8bf5f3737cbc05a1b916828c01": "f676d5a4e7424bf8fbbc651a2e9e2570",
".git/objects/ec/5b74c3a5f73c8a36f84e6c13408e69f3c214a0": "e0f47ad70dc05df379d74136a5112e49",
".git/objects/ec/775aa7d76b3eee2cc89a4b07696edbfcfec4a7": "afe0847af5e6e50e5011ad956f148f9a",
".git/objects/4b/5486b9210039e6d2941d3ad9842f5b3d5903c0": "c5f4bc97b40f890d5e34850482d6d875",
".git/objects/7d/abafdad9a7315e7d288431eff303b1d1d0997a": "979a1f39a996c7210934b36ed9ba4555",
".git/objects/7d/017988b3d98b0443c9da58e09bc1abea6c10e2": "799a3f35fb99defdb6f33d4a63c0cf98",
".git/objects/7c/9b881419c61bff5d68034de17348f506e15b25": "68a00f020ef30aa9a7deec5ad01602ac",
".git/objects/7c/35caefc11c1b43d6c4ac665bc00cb76cbb1852": "082910ae66a51484c93b0c3d1338492b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/7b/1bd61411d0e831bea971e8ef49c7ebb94c2359": "c9b525d96782cd89ad72b7e48ba956c2",
".git/objects/8f/dffccf2364a120b555c9cf49d9fbf5b6536a04": "c23718505e6779aa1346284346df41db",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/16fa59b781628342395d4ca9227af1b95b2bc8": "288ddf2cc82adb4b0c0eb9b469dcee92",
".git/objects/26/1dca8caaa65e67166f5668be12d2102174cf34": "2222828ae8619df2c0597f263e3dc8f7",
".git/objects/21/647f03b83a555d592a3791a0fa0a424d2a29e5": "256ff0e4d3f50b7b51e38eec44f9de9c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/3296d58db8cf17644714b361d9431e7f8c5a3d": "3af4dde1b9c62c14c96b4a29ea934a43",
".git/objects/2a/83c18664e01eb644968eab6797237314876abc": "22f1a02b12e179a04f6636d448b9d361",
".git/objects/43/d78ce203fc07b253fd03f648006a21f56dccd6": "89b7ddaadbe7f3fd852ceb34c3ec7b31",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/adb990c88c77ec3749cd856b46c6e93926b161": "eaadc86aad5ed24ec23f6d92500942d2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/ea2cc9f2eb4ecca17dc89e3d1bd6d3e11bdf64": "1fa3e8a2de3a427f268bf3d9f36819b6",
".git/objects/5c/88739bdf1b4aec798fb58c873483a08a538b2a": "56696b488f8365e771240915ac8ceb9e",
".git/objects/5d/0d0907d471dc477fcba3577680e8b5f34d118d": "ba0a769ab9c44d1ea10e0aeec6f715d3",
".git/objects/65/1007ac4a27e9082e44c82a1bb4175dc4e31d26": "c0f050a1d6af4fbf573c8c17dd3a74b4",
".git/objects/65/8af1847f122acf0c2ea25bceb3cf344e5ec3d6": "6289f1ac3d51d303b86a4f173a0cf0ae",
".git/objects/65/3d9f0277dd8949796cc761ebb2b608b9186312": "45aba09f0d724ab904cf07395066a0ec",
".git/objects/62/d6be4fd1cb6908511c667ef375e1a35be00ead": "284eff5f15cce900c568f74a676c442c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/1cbc1afb73492597347235544534f00efd3834": "42625d998c85d0930e67b59a0e381071",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/c8f7deda9698dd8716c91bac6beb983ac4c813": "d80a4570865f1e1c798801d3196b378a",
".git/objects/52/3163cb34baa7f683bb72dfc3758e270aa0ca9d": "b2e3be83afe1926dcb00efcb10fb7402",
".git/objects/97/4495e0878cfc2d119f7f86c9a39db2e547190a": "4075c97d365be91daf08b5dcc9ed4f38",
".git/objects/63/c52acaba6a7e131af2865b3763aae7c356fffa": "1cf9510df4d319ed6a7ecc628f0acce4",
".git/objects/0f/e672da400f66d432b983d7e9b321db7df82b0b": "07f60939db6f59797961fdf53828c062",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4d7eb419821267df7c952d6e31d01f6a44f6b7": "4aee10252d7da296edc01fae57bb9ccf",
".git/objects/d4/8c5ec0fe1757b6bc60954df9cfd145718397b8": "65debafd1cb5858fb99877131c2df816",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/c18bdde996f92642d75f067f2b8ed87e95911a": "4597bf9a8e00b978ce78d1a585b4e250",
".git/objects/d5/4c52faf3fc9fd9d3d7059d1bea6d8516baa1ba": "49c206fe607468bd2af5ac972f5c3594",
".git/objects/af/b42deb6ba882b4cb1a852dc4cde9c4115c57f3": "9a22431c8692390d320b9ae36fc295ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b3ca2c6f5a9d522f96619d7366b4c49a8f678e": "1c8060814673ec3fcf5bf4d30186d45c",
".git/objects/de/bb4abb217d8dc02e36884cf8d451d62f66b671": "64103d4ed0cda09f0459b16715864dee",
".git/objects/b0/281f886f11705ea978e465d7b21b1bcff2ae90": "39340fd1d388f2e634fc3ef4fba417dd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2199e1246cd61ccc68290d926b2b7d463b8387": "b1dd15d97bf7f56e43718ab9b7b3944a",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/e1/76a433a096cbc0760c0132e43cbe299b17f245": "6db119288384beaab8edf45083632963",
".git/objects/e8/362cbcc8f4334852983c0fba965dd7b9e81af3": "d9fb5e8d36ad65d0177089802d1a1e8b",
".git/objects/e8/15ed81b5c9831454369e97ada6acd4ca2e0439": "b1df78124e4ec083935ce7a7cfbfebe8",
".git/objects/e8/9bd5aa895baa71dfa62c6b52d3cc09b6cd4e9c": "36add5bfb55f97901b2e88ec2c7c2d04",
".git/objects/fa/f317ff9924971a4c4368cf3293fd937695cb72": "1e55f6e653f9644a56499e35709ddc9a",
".git/objects/c5/4a6acab3251d73d53fcce2700db70362ba1b53": "f0889c4b493d2360bb7cfb056d3649e5",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/cb/8064c4d4b9ccfd6dffe10fedc909c0f9aa2f7c": "5f3eeb34f0a72639a62f43c9dc10ba8e",
".git/objects/46/b3583c5fd4c82cdd3d5ee7a4403cb4896bc1a6": "8bd74ad23834222b8e4f5cef2f21cca1",
".git/objects/46/90763bc71eac63182fc30dd8943bd1b8700c77": "6fea674ec00def467b637be899b72cd2",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/77/a1b336a0db406246aacb9013e1735e3f265fee": "a0fdf6d71227f33b86d998deffcd2a63",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/48/34743bb3f1d4e5e85cbe717d018260cb98fcf8": "bf6b4fef655faecf023880a4c35c49fa",
".git/objects/1e/cb1afa8b08dc3226be9ec12c1e7445a9dad00b": "ec2ded4b3d477cf90959c65291577792",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/756f97d6fc768f9521bac84c219910ca8baa72": "74c16ecbbeb96e7a655cff1fe3bf4288",
".git/objects/85/a1eede9c095e9bf32c02f6838cb8f1c7203bf3": "ab9a734b82cd4859eb93d364c0381a99",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/cb149b394c54267f51a4c9b94519a1ed15a40b": "b3a8ee9506672aefa6ae268fd2c85ec0",
".git/objects/49/7ed5e7db3b92001ecfbae77b585526f7f07ddc": "0b54c793b992ef97e4f25cbc20b3318f",
".git/objects/2e/9f9e0d62114e79407d6e351efea259f56b7716": "221c02e0427133966c69e2edb9d3d378",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/14/e977d34c1384946d1b28e926c7ba20a32bfcd7": "2692ffb23f5d544b9969f143413368b3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7aadec30f1dabe3ddde242658481810",
".git/logs/refs/heads/main": "b7aadec30f1dabe3ddde242658481810",
".git/logs/refs/remotes/origin/main": "805c90200249fd7de20e7ab11ca96663",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a727521018eae62770efeafa3afb6ba4",
".git/refs/remotes/origin/main": "a727521018eae62770efeafa3afb6ba4",
".git/index": "34fcb9cdc48b19c20c60cded65ff520d",
".git/COMMIT_EDITMSG": "2264b45597c719ada795f7f4a19c145a",
"assets/AssetManifest.json": "27d98140f4d74fc232e821e73d490128",
"assets/NOTICES": "55ce341040ba9c61ffb57f70ca7b19ec",
"assets/FontManifest.json": "7b7cf6a41a6b00d8387712e2be9e84fd",
"assets/AssetManifest.bin.json": "b6418201d600ece37e49bad2930c1493",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dcd01f1ee03888e2c670ad89b2177317",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "fb75c1114d81b58651cee8cbbcefdd1b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "55bcb54b961981f483e0bc0d8b488b76",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5398d5c7d25fccafaa38f36ac29f40ab",
"assets/fonts/MaterialIcons-Regular.otf": "1cb4eded200b28805cb14569b6433d63",
"assets/assets/images/mrnachiketmor.png": "8dcb5290dbf001985b1e15612992d254",
"assets/assets/images/santosh_ji.png": "1de2cfe767dfbb3d7710b4b06d89d591",
"assets/assets/images/4isto3resolution.png": "eed34f5dc3511321c79f571eb87e4f05",
"assets/assets/images/trdua_pp.png": "4eca04b012cec3b6ab74e0df01749ce4",
"assets/assets/images/volunteer_img.png": "d7b00b9830a5d15a4314c8d12e7ab876",
"assets/assets/images/mrrameshg.png": "37e6ea9ef6d021971a5df911d032abc0",
"assets/assets/images/mrMayank.png": "712cfd93bf7379adbd1b4974ab09a699",
"assets/assets/images/mrLayak.png": "81cd9c3c3ca33b107a45cb018bdb97a1",
"assets/assets/images/who_we_are.jpg": "a167424b183a167ba40f62570bca21f9",
"assets/assets/images/mrvinodji.png": "9b9944f3d898fe44e3e8714d27867b1a",
"assets/assets/images/social_icon.png": "6afa913d9dacd4f9c3d83f9e674f2769",
"assets/assets/images/product_icon.png": "fb4bcde70a7d4a71c9e2f32e567e3b15",
"assets/assets/images/primary_logo.png": "7df784e13329aad2e96b455a0ff64637",
"assets/assets/images/primary_logo_horizontal.png": "1fa7e94f5fd69a0b1748d667323c4d6d",
"assets/assets/images/member_image.png": "2695b1ec0301f4939a1ec740ef962ee9",
"assets/assets/images/health_hub_icon.png": "2bbeb94aba812fe57f1d8d735ca844bb",
"assets/assets/fonts/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
