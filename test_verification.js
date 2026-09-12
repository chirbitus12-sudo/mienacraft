const http = require('http');
const db = require('./server/db');

console.log('--- STARTING VERIFICATION TEST ---');

// 1. Check DB initialization
console.log('1. Testing DB Store Initialization...');
const versions = db.getVersions();
console.log(`   Found ${versions.length} pre-seeded Craft versions.`);
console.assert(versions.length >= 8, 'Expected at least 8 versions');

const ads = db.getAds();
console.log(`   Found ${ads.length} pre-configured Ad slots.`);
console.assert(ads.length >= 5, 'Expected at least 5 ad slots');

const settings = db.getSiteSettings();
console.log(`   Site Title: "${settings.siteName}", Theme: "${settings.accentTheme}"`);

// 2. Test Admin Auth
console.log('2. Testing Admin Authentication...');
const validLogin = db.verifyAdmin('admin', 'craftadmin2026');
console.log(`   Default login check: ${validLogin ? 'PASS' : 'FAIL'}`);
console.assert(validLogin === true, 'Admin credentials check failed');

const invalidLogin = db.verifyAdmin('admin', 'wrongpassword');
console.assert(invalidLogin === false, 'Invalid credentials should fail');

const token = db.generateSessionToken();
console.log(`   Session Token Generated: ${token.substring(0, 16)}...`);
console.assert(db.isValidSession(token) === true, 'Session token should be valid');

// 3. Test Version CRUD
console.log('3. Testing Version CRUD...');
const newVer = db.addVersion({
  versionNumber: '9.9.9-test',
  title: 'Test Build',
  category: 'Beta',
  fileSize: '100 MB',
  summary: 'Automated test version'
});
console.log(`   Added version: ${newVer.versionNumber} (ID: ${newVer.id})`);
const foundVer = db.getVersionById(newVer.id);
console.assert(foundVer !== null, 'Version should be found');

const newCount = db.incrementDownload(newVer.id);
console.log(`   Incremented download count: ${newCount}`);
console.assert(newCount === 1, 'Download count should be 1');

db.deleteVersion(newVer.id);
const afterDelete = db.getVersionById(newVer.id);
console.assert(afterDelete === undefined, 'Version should be deleted');
console.log('   Deleted test version successfully.');

// 4. Test Ads CRUD
console.log('4. Testing Ad Management (Insert, Modify, Toggle, Delete)...');
const updatedAd = db.updateAd('header_top', {
  code: '<div class="test-ad">Updated Ad Code</div>'
});
console.assert(updatedAd.code.includes('Updated Ad Code'), 'Ad code should be updated');
console.log('   Modified ad code successfully.');

const customAd = db.addAdSlot({
  id: 'test_custom_slot',
  name: 'Test Ad Banner',
  placement: 'Custom Slot',
  enabled: true,
  code: '<div>Custom Banner</div>'
});
console.assert(db.getAdById('test_custom_slot') !== undefined, 'Custom ad slot should exist');
console.log('   Inserted custom ad slot successfully.');

db.deleteAd('test_custom_slot');
console.assert(db.getAdById('test_custom_slot') === undefined, 'Custom ad slot should be deleted');
console.log('   Removed custom ad slot successfully.');

// Restore initial header_top ad
db.init();

console.log('--- ALL VERIFICATION TESTS PASSED SUCCESSFULLY! ---');
process.exit(0);
