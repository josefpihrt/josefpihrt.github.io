$currentDirectory=Get-Location

Set-Location ../../roslynator/tools
./generate_cli_docs.ps1
./generate_ref_docs.ps1
./generate_metadata.ps1
./generate_configuration_file.ps1
Copy-Item "build/*" "docs/roslynator" -Recurse -Force

Set-Location ../../orang/tools
./generate_documentation.ps1
Copy-Item "build/*" "docs/orang" -Recurse -Force

Set-Location ../../dotmarkdown/tools
./generate_documentation.ps1
Copy-Item "build/*" "docs/dotmarkdown" -Recurse -Force -PassThru

Set-Location $currentDirectory