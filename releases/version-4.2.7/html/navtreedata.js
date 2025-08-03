/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "JasPer", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "License", "license.html", [
      [ "License", "license.html#license__license", null ]
    ] ],
    [ "Introduction", "intro.html", [
      [ "Motivation Behind JasPer", "intro.html#__motivation", null ],
      [ "What is JasPer?", "intro.html#intro__what_is_jasper", null ],
      [ "Software License", "intro.html#intro__software_license", null ],
      [ "Other Sources of Information on JasPer", "intro.html#intro__other_jasper_references", null ],
      [ "Origin of the Name", "intro.html#intro__origin_of_name", null ]
    ] ],
    [ "Installation", "install.html", [
      [ "Version Identification", "install.html#install__versioning", null ],
      [ "Obtaining the Software", "install.html#install__obtaining", null ],
      [ "Extracting the Software", "install.html#install__extracting", null ],
      [ "Prerequisites for Building (Software Dependencies)", "install.html#install__prereqs", null ],
      [ "Building the Software", "install.html#install__building", null ]
    ] ],
    [ "JasPer Library", "lib.html", [
      [ "Introduction", "lib.html#lib_intro", null ],
      [ "Core Code", "lib.html#lib__core", null ],
      [ "Codec Drivers", "lib.html#lib__codecs", null ],
      [ "Image Model", "lib.html#lib__image_model", null ],
      [ "JasPer Header Files", "lib.html#lib__headers", null ],
      [ "Initializing the Library", "lib.html#lib__init00", null ],
      [ "Memory Allocation", "lib.html#lib_alloc00", null ],
      [ "Adding Support for a New Image Format", "lib.html#lib__adding_codecs", null ],
      [ "Topics", "lib.html#Library", null ],
      [ "Configuration, Initialization, and Shutdown", "lib_init.html", [
        [ "API References", "lib_init.html#lib_init__api", null ],
        [ "Configuration, Initialization, and Shutdown", "lib_init.html#init_overview", null ],
        [ "Library State", "lib_init.html#init__state", null ],
        [ "Contexts", "lib_init.html#init__contexts", null ],
        [ "Example of Code for Library Setup and Shutdown", "lib_init.html#init_setup_example_1", null ],
        [ "Additional Examples of Library Setup", "lib_init.html#init_setup_example_3", null ],
        [ "Memory Allocators and the Allocator Wrapper", "lib_init.html#init_allocators", null ],
        [ "Logging", "lib_init.html#Logging", null ]
      ] ],
      [ "Images, Sequences, and Color Management", "lib_images.html", [
        [ "API References", "lib_images.html#lib_images__api", null ],
        [ "Images", "lib_images.html#overview_images", null ],
        [ "Color Management", "lib_images.html#overview_cm", null ],
        [ "ICC Profiles", "lib_images.html#overview_icc", null ],
        [ "Sequences and Matrices", "lib_images.html#images_seq", null ]
      ] ],
      [ "I/O Streams", "lib_iostreams.html", [
        [ "API References", "lib_iostreams.html#lib_iostream__api", null ],
        [ "I/O Streams", "lib_iostreams.html#overview_streams", null ]
      ] ],
      [ "Logging", "lib_log.html", [
        [ "API References", "lib_log.html#lib_log__api", null ],
        [ "Logging", "lib_log.html#logging", null ]
      ] ],
      [ "String Processing", "lib_string.html", [
        [ "API References", "lib_string.html#lib_string__api", null ],
        [ "Command-Line Interface (CLI) Option Processing", "lib_string.html#lib_string__getopt", null ],
        [ "Tag-Value Pair (TVP) Processing", "lib_string.html#lib_string_tvp", null ],
        [ "String Processing", "lib_string.html#lib_string__string", null ]
      ] ],
      [ "Math Support", "lib_math.html", [
        [ "API References", "lib_math.html#lib_math__api", null ],
        [ "Math Support", "lib_math.html#lib_math__intro", null ]
      ] ],
      [ "Timers", "lib_timers.html", [
        [ "API References", "lib_timers.html#lib_timers__api", null ],
        [ "Timers", "lib_timers.html#lib_timers__introduction", null ]
      ] ]
    ] ],
    [ "JasPer Application Programs", "apps.html", [
      [ "Introduction", "apps.html#app_intro", null ],
      [ "The jasper Program", "apps_jasper.html", [
        [ "The jasper Program", "apps_jasper.html#app__jasper", [
          [ "Synopsis", "apps_jasper.html#app__jasper__synopsis", null ],
          [ "Description", "apps_jasper.html#app__jasper__desc", null ],
          [ "Options", "apps_jasper.html#app__jasper__options", null ],
          [ "Examples", "apps_jasper.html#app__jasper__examples", null ]
        ] ]
      ] ],
      [ "The jiv Program", "apps_jiv.html", [
        [ "The jiv Program", "apps_jiv.html#app__jiv", [
          [ "Synopsis", "apps_jiv.html#app__jiv__synopsis", null ],
          [ "Description", "apps_jiv.html#app__jiv__desc", null ],
          [ "Options", "apps_jiv.html#app__jiv__options", null ]
        ] ]
      ] ],
      [ "The imgcmp Program", "apps_imgcmp.html", [
        [ "The imgcmp Program", "apps_imgcmp.html#app__imgcmp", [
          [ "Synopsis", "apps_imgcmp.html#app__imgcmp__synpopsis", null ],
          [ "Description", "apps_imgcmp.html#app__imgcmp__desc", null ],
          [ "Options", "apps_imgcmp.html#app__imgcmp__options", null ],
          [ "Examples", "apps_imgcmp.html#app__imgcmp__examples", null ]
        ] ]
      ] ],
      [ "The imginfo Program", "apps_imginfo.html", [
        [ "The imginfo Program", "apps_imginfo.html#app__imginfo", [
          [ "Synopsis", "apps_imginfo.html#app__imginfo__synopsis", null ],
          [ "Description", "apps_imginfo.html#app__imginfo__desc", null ],
          [ "Options", "apps_imginfo.html#app__imginfo__options", null ],
          [ "Examples", "apps_imginfo.html#app__imginfo__example", null ]
        ] ]
      ] ]
    ] ],
    [ "Codecs", "codecs.html", [
      [ "Common Codec Functionality", "codecs.html#codecs__common", [
        [ "Generic Encoder Options", "codecs.html#codecs__common__enc_options", null ],
        [ "Generic Decoder Options", "codecs.html#codecs__common__dec_options", null ]
      ] ],
      [ "BMP Codec", "codecs.html#codecs__bmp", [
        [ "Encoder Options", "codecs.html#codecs__bmp__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__bmp__dec_options", null ]
      ] ],
      [ "HEIC Codec", "codecs.html#codecs__heic", [
        [ "Encoder Options", "codecs.html#codecs__heic__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__heic__dec_options", null ]
      ] ],
      [ "JP2 Codec", "codecs.html#codecs__jp2", [
        [ "Encoder Options", "codecs.html#codecs__jp2__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__jp2__dec_options", null ]
      ] ],
      [ "JPC Codec", "codecs.html#codecs__jpc", [
        [ "Encoder Options", "codecs.html#codecs__jpc__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__jpc__dec_options", null ],
        [ "Rate Specification", "codecs.html#codecs__jpc__rate_specification", null ]
      ] ],
      [ "JPG Codec", "codecs.html#codecs__jpg", [
        [ "Encoder Options", "codecs.html#codecs__jpg__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__jpg_dec_options", null ]
      ] ],
      [ "PGX Codec", "codecs.html#codecs__pgx", [
        [ "Encoder Options", "codecs.html#codecs__pgx__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__pgx__dec_options", null ]
      ] ],
      [ "MIF Codec", "codecs.html#codecs__mif", [
        [ "Encoder Options", "codecs.html#codecs__mif__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__mif__dec_options", null ]
      ] ],
      [ "PNM Codec", "codecs.html#codecs__pnm", [
        [ "Encoder Options", "codecs.html#codecs__pnm__enc_options", null ],
        [ "Decoder Options", "codecs.html#codecs__pnm__dec_options", null ]
      ] ],
      [ "RAS Codec", "codecs.html#codecs__ras", [
        [ "Encoder Options", "codecs.html#codecs__ras__enc__options", null ],
        [ "Decoder Options", "codecs.html#codecs__ras__dec_options", null ]
      ] ]
    ] ],
    [ "Bug Tracking and Reporting", "bugs.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Bibliography", "citelist.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"group__module__images.html#gaf18f423a231548842528a0c14e7b28bf",
"lib.html#lib__core"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';