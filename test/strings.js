var dm2 = require('../');
var test = require('tape');

test('Simple strings', function(t) {
  var strings = [
    '001 00 *a 008681048 *b 810015 *f a',
    'abcdefghjklmnopqrstuvwxyzæøåÆØÅ',
    'Multi\nline',
    'Téxte wîth aðmîrable diãcritics',
  ];

  t.plan(strings.length);
  strings.forEach(function(str) { t.equal(dm2(str), str) })
});

test('Specially handled strings', function(t) {
  var strings = {
    'mail@@example.com': 'mail@example.com',
    'M@00e9nade': 'Ménade',
    '@å @Å @* @¤ @@': '\ua733 \ua732 * ¤ @',
  };

  var keys = Object.keys(strings);
  t.plan(keys.length);

  keys.forEach(function(key) { t.equal(dm2(key), strings[key]) });
});
