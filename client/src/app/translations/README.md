# Translation System Guide

This project now uses an organized translation system with separate JSON files for each language.

## File Structure

```
src/app/translations/
├── en.json          # English translations
├── es.json          # Spanish translations  
├── ht.json          # Haitian Creole translations
├── migration.ts     # Migration helper for backward compatibility
```

## Usage

### New Way (Recommended)

Use the `t` function with dot notation for organized translations:

```tsx
import { useTranslation } from '../contexts/TranslationContext';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('navigation.home')}</h1>
      <p>{t('listings.showing')} 10 {t('listings.of')} 50 {t('listings.listings')}</p>
      <button>{t('filters.reset')}</button>
    </div>
  );
};
```

### Old Way (Still Supported)

The old `translateText` function still works for backward compatibility:

```tsx
import { useTranslation } from '../contexts/TranslationContext';

const MyComponent = () => {
  const { translateText } = useTranslation();
  
  useEffect(() => {
    translateText('Home').then(setTranslatedHome);
  }, []);
  
  return <h1>{translatedHome}</h1>;
};
```

## Translation Keys Structure

### Navigation
- `navigation.home` - "Home"
- `navigation.about` - "About"
- `navigation.listings` - "Listings"
- `navigation.resources` - "Resources"
- `navigation.contact` - "Contact"
- `navigation.login` - "Login"
- `navigation.menu` - "MENU"

### Language
- `language.translate` - "Translate"
- `language.english` - "English"
- `language.spanish` - "Spanish"
- `language.haitian_creole` - "Haitian Creole"

### Header
- `header.miami_dade_county` - "Miami-Dade County"
- `header.311` - "311"
- `header.gov_meetings` - "GovMeetings"
- `header.calendar` - "Calendar"

### Filters
- `filters.zipcode` - "Zipcode"
- `filters.district` - "District"
- `filters.type_of_project` - "Type of Project"
- `filters.housing_type` - "Housing Type"
- `filters.reset` - "Reset"
- `filters.search_by_filter` - "Search by Filter"
- `filters.enter_zipcode` - "Enter Zipcode Number"
- `filters.select_district` - "Select District"
- `filters.select_option` - "Select Option"

### Listings
- `listings.showing` - "Showing"
- `listings.of` - "of"
- `listings.listings` - "listings"
- `listings.no_of_units` - "No. of Units"
- `listings.type_of_project_label` - "Type of Project:"
- `listings.housing_type_label` - "Housing Type:"

### Options
- `options.all` - "All"
- `options.family` - "Family"
- `options.elderly` - "Elderly"
- `options.foster_care_facility` - "Foster Care Facility"
- `options.homeless` - "Homeless"
- `options.special_needs` - "Special Needs"
- `options.public` - "Public"
- `options.private` - "Private"

### Footer
- `footer.help_and_support` - "Help and Support"
- `footer.miami_dade_home` - "Miami-Dade Home"
- `footer.privacy_statement` - "Privacy Statement"
- `footer.ada_notice` - "ADA Notice"
- `footer.disclaimer` - "Disclaimer"
- `footer.about_miami_dade` - "About Miami-Dade"
- `footer.self_service` - "Self-Service"
- `footer.311_contact_center` - "311 Contact Center"
- `footer.mobile_applications` - "Mobile Applications"
- `footer.open_data` - "Open Data"
- `footer.public_records` - "Public Records"
- `footer.service_directory` - "Service Directory"
- `footer.stay_connected` - "Stay Connected"
- `footer.legal_ads_notices` - "Legal Ads & Public Notices"
- `footer.social_media_directory` - "Social Media Directory"
- `footer.watch_government_meetings` - "Watch Government Meetings"
- `footer.county_calendar` - "County Calendar"
- `footer.news_rss_feed` - "News RSS Feed"
- `footer.email_disclaimer` - Legal disclaimer text about email addresses
- `footer.all_rights_reserved` - "All rights reserved."
- `footer.feedback` - "Feedback"

## Benefits

1. **Better Organization** - Translations are categorized and easier to maintain
2. **Performance** - No async calls needed, instant translations
3. **Type Safety** - Better IDE support with structured keys
4. **Maintainability** - Easy to add new translations or modify existing ones
5. **Fallback Support** - Automatic fallback to English if translation missing

## Adding New Translations

1. Add the key to all three JSON files (`en.json`, `es.json`, `ht.json`)
2. Use the new key in your component with `t('category.key')`
3. If migrating from old string-based translations, update the `migration.ts` file

## Migration

To migrate existing components:
1. Replace `await translateText('Text')` with `t('category.key')`
2. Remove async/await and useEffect hooks that were only for translations
3. Use the migration map in `migration.ts` as a reference for key mappings
