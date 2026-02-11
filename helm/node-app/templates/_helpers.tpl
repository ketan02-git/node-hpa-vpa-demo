{{/*
Expand the name of the chart.
*/}}
{{- define "node-app.name" -}}
node-app
{{- end }}

{{/*
Create a fully qualified app name.
*/}}
{{- define "node-app.fullname" -}}
node-app
{{- end }}

{{/*
Common labels
*/}}
{{- define "node-app.labels" -}}
app.kubernetes.io/name: {{ include "node-app.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
