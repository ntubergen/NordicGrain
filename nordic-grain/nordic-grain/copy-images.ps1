# Run from this repo folder. Point $src at the "_files" folder Firefox saved next to the .htm
param([string]$src = "$env:USERPROFILE\Downloads\Nordic Grain Woodworking LLC_files")

$dst = Join-Path $PSScriptRoot 'images'
$map = @{ 'nordic-grain-logo_9qUZ.jpg' = 'logo.jpg'
          'media-generation-nordic-grain-llc-burned-wood-h-0-18055_9qUZ.jpg' = 'hero.jpg' }
1..7 | ForEach-Object { $n = '{0:D2}' -f $_; $map["project-${n}_9qUZ.jpg"] = "project-$n.jpg" }

foreach ($k in $map.Keys) {
    $f = Join-Path $src $k
    if (Test-Path $f) { Copy-Item $f (Join-Path $dst $map[$k]) -Force; "copied  $($map[$k])" }
    else { Write-Warning "missing $k" }
}
