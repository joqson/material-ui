import { assert } from 'chai';
import textToHash from './textToHash';

describe('textToHash', () => {
  it('should hash correctly', () => {
    assert.strictEqual(
      textToHash('createMuiTheme(options) => theme'),
      'createmuitheme-options-theme',
    );
    assert.strictEqual(textToHash('Typography - Font family'), 'typography-font-family');
    assert.strictEqual(textToHash('barre d&#39;application'), 'barre-dapplication');
  });

  it('should generate a unique hash', () => {
    const unique = {};
    assert.strictEqual(textToHash('Styling solution', unique), 'styling-solution');
    assert.strictEqual(textToHash('Styling solution', unique), 'styling-solution-2');
  });
});
