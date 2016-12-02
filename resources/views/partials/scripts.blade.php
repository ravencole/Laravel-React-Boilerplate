@if (env("JS_ENV") === 'dev')
    <script src="http://{{env('JS_HOST')}}:{{env('JS_PORT')}}/static/bundle.js"></script>
@else
    <script src="{{ asset('js/app.js') }}"></script>
@endif
