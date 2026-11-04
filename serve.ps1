param (
    [int]$Port = 8080
)

$folder = $PSScriptRoot
if (-not $folder) { $folder = (Get-Location).Path }

$listener = New-Object System.Net.HttpListener

# Try primary port or fallback port
$started = $false
foreach ($p in @($Port, 3000, 5000, 5500, 8000, 8081)) {
    try {
        $listener = New-Object System.Net.HttpListener
        $prefix = "http://localhost:$p/"
        $listener.Prefixes.Add($prefix)
        $listener.Start()
        $Port = $p
        $started = $true
        break
    } catch {
        $listener.Close()
    }
}

if (-not $started) {
    Write-Error "Could not bind to any port."
    exit 1
}

Write-Host "=========================================="
Write-Host "  RAIHANATH PORTFOLIO LOCAL SERVER"
Write-Host "  URL: http://localhost:$Port/"
Write-Host "=========================================="

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".png"   = "image/png"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
    ".mp4"   = "video/mp4"
    ".mov"   = "video/mp4"
    ".webm"  = "video/webm"
    ".ogg"   = "video/ogg"
}

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
                $urlPath = "/index.html"
            }

            $decodedPath = [System.Uri]::UnescapeDataString($urlPath.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar))
            $filePath = Join-Path $folder $decodedPath

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [IO.Path]::GetExtension($filePath).ToLower()
                $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                $response.ContentType = $mime
                
                # CORS and streaming headers
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.AddHeader("Accept-Ranges", "bytes")

                $fileInfo = New-Object System.IO.FileInfo($filePath)
                $response.ContentLength64 = $fileInfo.Length

                if ($request.HttpMethod -ne "HEAD") {
                    $fileStream = [System.IO.File]::OpenRead($filePath)
                    try {
                        $buffer = New-Object byte[] 65536
                        while (($bytesRead = $fileStream.Read($buffer, 0, $buffer.Length)) -gt 0) {
                            $response.OutputStream.Write($buffer, 0, $bytesRead)
                        }
                    } finally {
                        $fileStream.Close()
                    }
                }
            } else {
                $response.StatusCode = 404
                $response.ContentType = "text/plain; charset=utf-8"
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
            $response.Close()
        } catch {
            try { $response.Close() } catch {}
        }
    }
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
