$currentDirectory = Get-Location

Set-Location ../../roslynator/tools
./generate_cli_docs.ps1
./generate_ref_docs.ps1
./generate_metadata.ps1
./generate_configuration_file.ps1
Copy-Item "build/*" "$currentDirectory/../docs/roslynator" -Recurse -Force
Remove-Item "build" -Recurse

Set-Location ../../orang/tools
./generate_cli_docs.ps1
./generate_ref_docs.ps1
Copy-Item "build/*" "$currentDirectory/../docs/orang" -Recurse -Force
Remove-Item "build" -Recurse

Set-Location ../../dotmarkdown/tools
./generate_ref_docs.ps1
Copy-Item "build/*" "$currentDirectory/../docs/dotmarkdown" -Recurse -Force
Remove-Item "build" -Recurse

Set-Location $currentDirectory