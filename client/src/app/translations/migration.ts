// Migration guide for updating components to use the new translation system

// OLD WAY (async):
// const translatedText = await translateText('Home');

// NEW WAY (sync with dot notation):
// const translatedText = t('navigation.home');

// Mapping from old strings to new keys:
export const migrationMap: Record<string, string> = {
  'Home': 'navigation.home',
  'About': 'navigation.about',
  'Listings': 'navigation.listings',
  'Resources': 'navigation.resources',
  'Contact': 'navigation.contact',
  'Login': 'navigation.login',
  'MENU': 'navigation.menu',
  
  'Translate': 'language.translate',
  'English': 'language.english',
  'Spanish': 'language.spanish',
  'Haitian Creole': 'language.haitian_creole',
  
  'Miami-Dade County': 'header.miami_dade_county',
  '311': 'header.311',
  'GovMeetings': 'header.gov_meetings',
  'Calendar': 'header.calendar',
  
  'Zipcode': 'filters.zipcode',
  'District': 'filters.district',
  'Type of Project': 'filters.type_of_project',
  'Housing Type': 'filters.housing_type',
  'Reset': 'filters.reset',
  'Search by Filter': 'filters.search_by_filter',
  'Enter Zipcode Number': 'filters.enter_zipcode',
  'Select District': 'filters.select_district',
  'Select Option': 'filters.select_option',
  
  'Showing': 'listings.showing',
  'of': 'listings.of',
  'listings': 'listings.listings',
  'No. of Units': 'listings.no_of_units',
  'Type of Project:': 'listings.type_of_project_label',
  'Housing Type:': 'listings.housing_type_label',
  
  'All': 'options.all',
  'Family': 'options.family',
  'Elderly': 'options.elderly',
  'Foster Care Facility': 'options.foster_care_facility',
  'Homeless': 'options.homeless',
  'Special Needs': 'options.special_needs',
  'Public': 'options.public',
  'Private': 'options.private',
  
  // Footer translations
  'Help and Support': 'footer.help_and_support',
  'Miami-Dade Home': 'footer.miami_dade_home',
  'Privacy Statement': 'footer.privacy_statement',
  'ADA Notice': 'footer.ada_notice',
  'Disclaimer': 'footer.disclaimer',
  'About Miami-Dade': 'footer.about_miami_dade',
  'Self-Service': 'footer.self_service',
  '311 Contact Center': 'footer.311_contact_center',
  'Mobile Applications': 'footer.mobile_applications',
  'Open Data': 'footer.open_data',
  'Public Records': 'footer.public_records',
  'Service Directory': 'footer.service_directory',
  'Stay Connected': 'footer.stay_connected',
  'Legal Ads & Public Notices': 'footer.legal_ads_notices',
  'Social Media Directory': 'footer.social_media_directory',
  'Watch Government Meetings': 'footer.watch_government_meetings',
  'County Calendar': 'footer.county_calendar',
  'News RSS Feed': 'footer.news_rss_feed',
  'All rights reserved.': 'footer.all_rights_reserved',
  'Feedback': 'footer.feedback'
};

// Helper function for backward compatibility
export const translateTextLegacy = (text: string, t: (key: string, fallback?: string) => string): string => {
  const key = migrationMap[text];
  if (key) {
    return t(key, text);
  }
  return text;
};
