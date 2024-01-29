import { newSpecPage } from '@stencil/core/testing';
import { WfButton } from './wf-button';

describe('wf-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WfButton],
      html: '<wf-button></wf-button>',
    });
    expect(root).toEqualHtml(`
      <wf-button>
        <mock:shadow-root>
          <button>
            <slot>Button</slot>
          </button>
        </mock:shadow-root>
      </wf-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WfButton],
      html: `<wf-button>Test</wf-button>`,
    });
    expect(root).toEqualHtml(`
      <wf-button>
        <mock:shadow-root>
          <button>
            <slot>Button</slot>
          </button>
        </mock:shadow-root>
        Test
      </wf-button>
    `);
  });
});
