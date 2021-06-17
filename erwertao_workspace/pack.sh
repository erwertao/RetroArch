rm -rf ./webserver/statics/*
cp -avx ../pkg/emscripten/libretro/* ./webserver/statics
cp -avx ../pkg/emscripten/*_libretro.* ./webserver/statics

