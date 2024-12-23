# WOVN KickStart Feature

The `Kick Start` feature enables offline translation by pre-loading localization data into the application. This ensures all content is accessible without an internet connection, making it ideal for:

- Applications used in low-connectivity areas.
- Avoiding flickering issues during the first app launch.

## WOVN Data Priority

The WOVN SDK uses three sources for localization data, prioritized as follows:

1. **API Data**:
   - Fetched directly from the WOVN API server.
   - Highest priority and automatically cached for future use.

2. **Cache Data**:
   - Stored locally when `API Data` is fetched.
   - Second highest priority.

3. **Kick Start Data**:
   - Pre-loaded localization data included in the application build.
   - Lowest priority, used only when `Cache Data` and `API Data` are unavailable at the app’s startup.

## Using the WOVN KickStart Feature

If the `wovn.kickstart` file is included in the build, the SDK automatically attempts to load it when no `Cache Data` is available. You can generate and include the `wovn.kickstart` file using the `wovn_sdk` tool.

### 1. Download `wovn.kickstart` During SDK Setup

To automatically download the `wovn.kickstart` file during SDK setup, use the `--with_kickstart` option:

```bash
wovn_sdk setup --platform=Android --project_path=./path/to/the/Android/project --sdk_version=latest --with_kickstart --with_string_resources -y
```

### 2. Download wovn.kickstart After SDK Setup

If you need to fetch or update the wovn.kickstart file after the SDK setup, use the following command. It’s recommended to run this before building or releasing the application:

```bash
wovn_sdk kickstart --platform=Android --project_path=./path/to/the/Android/project
```
