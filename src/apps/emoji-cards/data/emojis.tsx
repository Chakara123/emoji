import { FormattedMessage } from 'react-intl';
import { ReactElement } from 'react';

export interface EmojiData {
  categories: ReactElement[];
  emojis: Record<string, [string, ReactElement, number]>;
}

export const DATA: EmojiData = {
  categories: [
    <FormattedMessage defaultMessage="Activities" id="UmEsZF" />,
    <FormattedMessage defaultMessage="Animals & Nature" id="szFhEu" />,
    <FormattedMessage defaultMessage="Component" id="S6QlZn" />,
    <FormattedMessage defaultMessage="Flags" id="Ed112w" />,
    <FormattedMessage defaultMessage="Food & Drink" id="39T2UN" />,
    <FormattedMessage defaultMessage="Objects" id="sWVioT" />,
    <FormattedMessage defaultMessage="People & Body" id="C3O7/J" />,
    <FormattedMessage defaultMessage="Smileys & Emotion" id="bPGw1X" />,
    <FormattedMessage defaultMessage="Symbols" id="HWhnps" />,
    <FormattedMessage defaultMessage="Travel & Places'" id="9LiqDv" />,
  ],
  emojis: {
    '100': [
      '💯',
      <FormattedMessage defaultMessage="Hundred points symbol" id="OaGu9G" />,
      7,
    ],
    '1234': [
      '🔢',
      <FormattedMessage
        defaultMessage="Input symbol for numbers"
        id="0vxKqP"
      />,
      8,
    ],
    hash: ['#️⃣', <FormattedMessage defaultMessage="Hash key" id="GTjatX" />, 8],
    keycap_star: [
      '*️⃣',
      <FormattedMessage defaultMessage="Keycap: *" id="mPWbJu" />,
      8,
    ],
    zero: ['0️⃣', <FormattedMessage defaultMessage="Keycap 0" id="YZIpz8" />, 8],
    one: ['1️⃣', <FormattedMessage defaultMessage="Keycap 1" id="OpvaqZ" />, 8],
    two: ['2️⃣', <FormattedMessage defaultMessage="Keycap 2" id="5kKtWO" />, 8],
    three: [
      '3️⃣',
      <FormattedMessage defaultMessage="Keycap 3" id="mtremB" />,
      8,
    ],
    four: ['4️⃣', <FormattedMessage defaultMessage="Keycap 4" id="QD+dBN" />, 8],
    five: ['5️⃣', <FormattedMessage defaultMessage="Keycap 5" id="VJF/pw" />, 8],
    six: ['6️⃣', <FormattedMessage defaultMessage="Keycap 6" id="O15uFu" />, 8],
    seven: [
      '7️⃣',
      <FormattedMessage defaultMessage="Keycap 7" id="AghnbY" />,
      8,
    ],
    eight: [
      '8️⃣',
      <FormattedMessage defaultMessage="Keycap 8" id="oSiOn2" />,
      8,
    ],
    nine: ['9️⃣', <FormattedMessage defaultMessage="Keycap 9" id="k+n7Ld" />, 8],
    copyright: [
      '©️',
      <FormattedMessage defaultMessage="Copyright sign" id="MiqPVQ" />,
      8,
    ],
    registered: [
      '®️',
      <FormattedMessage defaultMessage="Registered sign" id="7kIBob" />,
      8,
    ],
    mahjong: [
      '🀄',
      <FormattedMessage defaultMessage="Mahjong tile red dragon" id="Xugeka" />,
      0,
    ],
    black_joker: [
      '🃏',
      <FormattedMessage
        defaultMessage="Playing card black joker"
        id="TedlYs"
      />,
      0,
    ],
    a: [
      '🅰️',
      <FormattedMessage
        defaultMessage="Negative squared latin capital letter a"
        id="Dn6ILt"
      />,
      8,
    ],
    b: [
      '🅱️',
      <FormattedMessage
        defaultMessage="Negative squared latin capital letter b"
        id="i4Ow/V"
      />,
      8,
    ],
    o2: [
      '🅾️',
      <FormattedMessage
        defaultMessage="Negative squared latin capital letter o"
        id="lQFF3p"
      />,
      8,
    ],
    parking: [
      '🅿️',
      <FormattedMessage
        defaultMessage="Negative squared latin capital letter p"
        id="5K/6d9"
      />,
      8,
    ],
    ab: [
      '🆎',
      <FormattedMessage defaultMessage="Negative squared ab" id="Hxof7r" />,
      8,
    ],
    cl: ['🆑', <FormattedMessage defaultMessage="Squared cl" id="BAU33a" />, 8],
    cool: [
      '🆒',
      <FormattedMessage defaultMessage="Squared cool" id="o5BHmV" />,
      8,
    ],
    free: [
      '🆓',
      <FormattedMessage defaultMessage="Squared free" id="Y3IXfo" />,
      8,
    ],
    id: ['🆔', <FormattedMessage defaultMessage="Squared id" id="Wpe0bK" />, 8],
    new: [
      '🆕',
      <FormattedMessage defaultMessage="Squared new" id="aRPsdo" />,
      8,
    ],
    ng: ['🆖', <FormattedMessage defaultMessage="Squared ng" id="jocDHc" />, 8],
    ok: ['🆗', <FormattedMessage defaultMessage="Squared ok" id="is3sfB" />, 8],
    sos: [
      '🆘',
      <FormattedMessage defaultMessage="Squared sos" id="j7Vuxn" />,
      8,
    ],
    up: [
      '🆙',
      <FormattedMessage
        defaultMessage="Squared up with exclamation mark"
        id="ZCnqWA"
      />,
      8,
    ],
    vs: ['🆚', <FormattedMessage defaultMessage="Squared vs" id="E6H0U5" />, 8],
    'flag-ac': [
      '🇦🇨',
      <FormattedMessage defaultMessage="Ascension island flag" id="nGM2+K" />,
      3,
    ],
    'flag-ad': [
      '🇦🇩',
      <FormattedMessage defaultMessage="Andorra flag" id="WgvLxv" />,
      3,
    ],
    'flag-ae': [
      '🇦🇪',
      <FormattedMessage
        defaultMessage="United arab emirates flag"
        id="6FZ7WL"
      />,
      3,
    ],
    'flag-af': [
      '🇦🇫',
      <FormattedMessage defaultMessage="Afghanistan flag" id="ZeBzGt" />,
      3,
    ],
    'flag-ag': [
      '🇦🇬',
      <FormattedMessage defaultMessage="Antigua & barbuda flag" id="1ZWXWs" />,
      3,
    ],
    'flag-ai': [
      '🇦🇮',
      <FormattedMessage defaultMessage="Anguilla flag" id="TZ6TKL" />,
      3,
    ],
    'flag-al': [
      '🇦🇱',
      <FormattedMessage defaultMessage="Albania flag" id="zTG2WH" />,
      3,
    ],
    'flag-am': [
      '🇦🇲',
      <FormattedMessage defaultMessage="Armenia flag" id="v+XKXV" />,
      3,
    ],
    'flag-ao': [
      '🇦🇴',
      <FormattedMessage defaultMessage="Angola flag" id="4Sfeu+" />,
      3,
    ],
    'flag-aq': [
      '🇦🇶',
      <FormattedMessage defaultMessage="Antarctica flag" id="P3bztn" />,
      3,
    ],
    'flag-ar': [
      '🇦🇷',
      <FormattedMessage defaultMessage="Argentina flag" id="yW0t56" />,
      3,
    ],
    'flag-as': [
      '🇦🇸',
      <FormattedMessage defaultMessage="American samoa flag" id="QH7WhI" />,
      3,
    ],
    'flag-at': [
      '🇦🇹',
      <FormattedMessage defaultMessage="Austria flag" id="htpFbJ" />,
      3,
    ],
    'flag-au': [
      '🇦🇺',
      <FormattedMessage defaultMessage="Australia flag" id="LJQDpV" />,
      3,
    ],
    'flag-aw': [
      '🇦🇼',
      <FormattedMessage defaultMessage="Aruba flag" id="zLOFGU" />,
      3,
    ],
    'flag-ax': [
      '🇦🇽',
      <FormattedMessage defaultMessage="Åland islands flag" id="OLBiLm" />,
      3,
    ],
    'flag-az': [
      '🇦🇿',
      <FormattedMessage defaultMessage="Azerbaijan flag" id="bKUY8K" />,
      3,
    ],
    'flag-ba': [
      '🇧🇦',
      <FormattedMessage
        defaultMessage="Bosnia & herzegovina flag"
        id="4zvOAb"
      />,
      3,
    ],
    'flag-bb': [
      '🇧🇧',
      <FormattedMessage defaultMessage="Barbados flag" id="YhjlCg" />,
      3,
    ],
    'flag-bd': [
      '🇧🇩',
      <FormattedMessage defaultMessage="Bangladesh flag" id="GMg67k" />,
      3,
    ],
    'flag-be': [
      '🇧🇪',
      <FormattedMessage defaultMessage="Belgium flag" id="kPPXmH" />,
      3,
    ],
    'flag-bf': [
      '🇧🇫',
      <FormattedMessage defaultMessage="Burkina faso flag" id="YprVBY" />,
      3,
    ],
    'flag-bg': [
      '🇧🇬',
      <FormattedMessage defaultMessage="Bulgaria flag" id="9D1lLx" />,
      3,
    ],
    'flag-bh': [
      '🇧🇭',
      <FormattedMessage defaultMessage="Bahrain flag" id="zTkUt8" />,
      3,
    ],
    'flag-bi': [
      '🇧🇮',
      <FormattedMessage defaultMessage="Burundi flag" id="7Nd2rE" />,
      3,
    ],
    'flag-bj': [
      '🇧🇯',
      <FormattedMessage defaultMessage="Benin flag" id="x9FaVY" />,
      3,
    ],
    'flag-bl': [
      '🇧🇱',
      <FormattedMessage defaultMessage="St. barthélemy flag" id="ZdNT0T" />,
      3,
    ],
    'flag-bm': [
      '🇧🇲',
      <FormattedMessage defaultMessage="Bermuda flag" id="K90fuH" />,
      3,
    ],
    'flag-bn': [
      '🇧🇳',
      <FormattedMessage defaultMessage="Brunei flag" id="S1NHtU" />,
      3,
    ],
    'flag-bo': [
      '🇧🇴',
      <FormattedMessage defaultMessage="Bolivia flag" id="/NDk9m" />,
      3,
    ],
    'flag-bq': [
      '🇧🇶',
      <FormattedMessage
        defaultMessage="Caribbean netherlands flag"
        id="ghNNE9"
      />,
      3,
    ],
    'flag-br': [
      '🇧🇷',
      <FormattedMessage defaultMessage="Brazil flag" id="303eCQ" />,
      3,
    ],
    'flag-bs': [
      '🇧🇸',
      <FormattedMessage defaultMessage="Bahamas flag" id="DwERYo" />,
      3,
    ],
    'flag-bt': [
      '🇧🇹',
      <FormattedMessage defaultMessage="Bhutan flag" id="oVDkLo" />,
      3,
    ],
    'flag-bv': [
      '🇧🇻',
      <FormattedMessage defaultMessage="Bouvet island flag" id="qwhWqX" />,
      3,
    ],
    'flag-bw': [
      '🇧🇼',
      <FormattedMessage defaultMessage="Botswana flag" id="5z5UGv" />,
      3,
    ],
    'flag-by': [
      '🇧🇾',
      <FormattedMessage defaultMessage="Belarus flag" id="DAstnE" />,
      3,
    ],
    'flag-bz': [
      '🇧🇿',
      <FormattedMessage defaultMessage="Belize flag" id="9cy+Mo" />,
      3,
    ],
    'flag-ca': [
      '🇨🇦',
      <FormattedMessage defaultMessage="Canada flag" id="Hod/mr" />,
      3,
    ],
    'flag-cc': [
      '🇨🇨',
      <FormattedMessage
        defaultMessage="Cocos (keeling) islands flag"
        id="Z/LM4o"
      />,
      3,
    ],
    'flag-cd': [
      '🇨🇩',
      <FormattedMessage defaultMessage="Congo - kinshasa flag" id="jur1Ec" />,
      3,
    ],
    'flag-cf': [
      '🇨🇫',
      <FormattedMessage
        defaultMessage="Central african republic flag"
        id="WqkMQr"
      />,
      3,
    ],
    'flag-cg': [
      '🇨🇬',
      <FormattedMessage
        defaultMessage="Congo - brazzaville flag"
        id="HloWLz"
      />,
      3,
    ],
    'flag-ch': [
      '🇨🇭',
      <FormattedMessage defaultMessage="Switzerland flag" id="ENfFpn" />,
      3,
    ],
    'flag-ci': [
      '🇨🇮',
      <FormattedMessage defaultMessage="Côte d’ivoire flag" id="tVf7o2" />,
      3,
    ],
    'flag-ck': [
      '🇨🇰',
      <FormattedMessage defaultMessage="Cook islands flag" id="MivL+S" />,
      3,
    ],
    'flag-cl': [
      '🇨🇱',
      <FormattedMessage defaultMessage="Chile flag" id="6o1NkF" />,
      3,
    ],
    'flag-cm': [
      '🇨🇲',
      <FormattedMessage defaultMessage="Cameroon flag" id="7vgOK4" />,
      3,
    ],
    'flag-cn': [
      '🇨🇳',
      <FormattedMessage defaultMessage="China flag" id="4fNgpD" />,
      3,
    ],
    'flag-co': [
      '🇨🇴',
      <FormattedMessage defaultMessage="Colombia flag" id="1X4EjZ" />,
      3,
    ],
    'flag-cp': [
      '🇨🇵',
      <FormattedMessage defaultMessage="Clipperton island flag" id="g4SsZA" />,
      3,
    ],
    'flag-cr': [
      '🇨🇷',
      <FormattedMessage defaultMessage="Costa rica flag" id="c21XZj" />,
      3,
    ],
    'flag-cu': [
      '🇨🇺',
      <FormattedMessage defaultMessage="Cuba flag" id="kPZEsd" />,
      3,
    ],
    'flag-cv': [
      '🇨🇻',
      <FormattedMessage defaultMessage="Cape verde flag" id="TTfBXE" />,
      3,
    ],
    'flag-cw': [
      '🇨🇼',
      <FormattedMessage defaultMessage="Curaçao flag" id="9qCHPk" />,
      3,
    ],
    'flag-cx': [
      '🇨🇽',
      <FormattedMessage defaultMessage="Christmas island flag" id="VtxYpz" />,
      3,
    ],
    'flag-cy': [
      '🇨🇾',
      <FormattedMessage defaultMessage="Cyprus flag" id="7IosNj" />,
      3,
    ],
    'flag-cz': [
      '🇨🇿',
      <FormattedMessage defaultMessage="Czechia flag" id="UnAeqg" />,
      3,
    ],
    'flag-de': [
      '🇩🇪',
      <FormattedMessage defaultMessage="Germany flag" id="A1CPl/" />,
      3,
    ],
    'flag-dg': [
      '🇩🇬',
      <FormattedMessage defaultMessage="Diego garcia flag" id="4NCSow" />,
      3,
    ],
    'flag-dj': [
      '🇩🇯',
      <FormattedMessage defaultMessage="Djibouti flag" id="Ruobts" />,
      3,
    ],
    'flag-dk': [
      '🇩🇰',
      <FormattedMessage defaultMessage="Denmark flag" id="2lUtn6" />,
      3,
    ],
    'flag-dm': [
      '🇩🇲',
      <FormattedMessage defaultMessage="Dominica flag" id="MNzfl/" />,
      3,
    ],
    'flag-do': [
      '🇩🇴',
      <FormattedMessage defaultMessage="Dominican republic flag" id="VUOQi0" />,
      3,
    ],
    'flag-dz': [
      '🇩🇿',
      <FormattedMessage defaultMessage="Algeria flag" id="BRIqHo" />,
      3,
    ],
    'flag-ea': [
      '🇪🇦',
      <FormattedMessage defaultMessage="Ceuta & melilla flag" id="no3QH+" />,
      3,
    ],
    'flag-ec': [
      '🇪🇨',
      <FormattedMessage defaultMessage="Ecuador flag" id="wcECdb" />,
      3,
    ],
    'flag-ee': [
      '🇪🇪',
      <FormattedMessage defaultMessage="Estonia flag" id="NVjVTm" />,
      3,
    ],
    'flag-eg': [
      '🇪🇬',
      <FormattedMessage defaultMessage="Egypt flag" id="QvUciL" />,
      3,
    ],
    'flag-eh': [
      '🇪🇭',
      <FormattedMessage defaultMessage="Western sahara flag" id="wltv8Z" />,
      3,
    ],
    'flag-er': [
      '🇪🇷',
      <FormattedMessage defaultMessage="Eritrea flag" id="0Pre6j" />,
      3,
    ],
    'flag-es': [
      '🇪🇸',
      <FormattedMessage defaultMessage="Spain flag" id="LAxy+b" />,
      3,
    ],
    'flag-et': [
      '🇪🇹',
      <FormattedMessage defaultMessage="Ethiopia flag" id="N4kH5d" />,
      3,
    ],
    'flag-eu': [
      '🇪🇺',
      <FormattedMessage defaultMessage="European union flag" id="tmiXX1" />,
      3,
    ],
    'flag-fi': [
      '🇫🇮',
      <FormattedMessage defaultMessage="Finland flag" id="j+2ADC" />,
      3,
    ],
    'flag-fj': [
      '🇫🇯',
      <FormattedMessage defaultMessage="Fiji flag" id="uheYuH" />,
      3,
    ],
    'flag-fk': [
      '🇫🇰',
      <FormattedMessage defaultMessage="Falkland islands flag" id="7h4n9V" />,
      3,
    ],
    'flag-fm': [
      '🇫🇲',
      <FormattedMessage defaultMessage="Micronesia flag" id="aU+0fJ" />,
      3,
    ],
    'flag-fo': [
      '🇫🇴',
      <FormattedMessage defaultMessage="Faroe islands flag" id="ndTKG3" />,
      3,
    ],
    'flag-fr': [
      '🇫🇷',
      <FormattedMessage defaultMessage="France flag" id="ZZMkou" />,
      3,
    ],
    'flag-ga': [
      '🇬🇦',
      <FormattedMessage defaultMessage="Gabon flag" id="Q0Q/MD" />,
      3,
    ],
    'flag-gb': [
      '🇬🇧',
      <FormattedMessage defaultMessage="United kingdom flag" id="IdYUUk" />,
      3,
    ],
    'flag-gd': [
      '🇬🇩',
      <FormattedMessage defaultMessage="Grenada flag" id="H999fP" />,
      3,
    ],
    'flag-ge': [
      '🇬🇪',
      <FormattedMessage defaultMessage="Georgia flag" id="B0QfpR" />,
      3,
    ],
    'flag-gf': [
      '🇬🇫',
      <FormattedMessage defaultMessage="French guiana flag" id="QfnT3a" />,
      3,
    ],
    'flag-gg': [
      '🇬🇬',
      <FormattedMessage defaultMessage="Guernsey flag" id="DMI/aw" />,
      3,
    ],
    'flag-gh': [
      '🇬🇭',
      <FormattedMessage defaultMessage="Ghana flag" id="9bhgVp" />,
      3,
    ],
    'flag-gi': [
      '🇬🇮',
      <FormattedMessage defaultMessage="Gibraltar flag" id="LDZAWC" />,
      3,
    ],
    'flag-gl': [
      '🇬🇱',
      <FormattedMessage defaultMessage="Greenland flag" id="loU32G" />,
      3,
    ],
    'flag-gm': [
      '🇬🇲',
      <FormattedMessage defaultMessage="Gambia flag" id="Phn2Fb" />,
      3,
    ],
    'flag-gn': [
      '🇬🇳',
      <FormattedMessage defaultMessage="Guinea flag" id="j9oz0a" />,
      3,
    ],
    'flag-gp': [
      '🇬🇵',
      <FormattedMessage defaultMessage="Guadeloupe flag" id="t48idp" />,
      3,
    ],
    'flag-gq': [
      '🇬🇶',
      <FormattedMessage defaultMessage="Equatorial guinea flag" id="aiYfjT" />,
      3,
    ],
    'flag-gr': [
      '🇬🇷',
      <FormattedMessage defaultMessage="Greece flag" id="rTscWy" />,
      3,
    ],
    'flag-gs': [
      '🇬🇸',
      <FormattedMessage
        defaultMessage="South georgia & south sandwich islands flag"
        id="NhenPI"
      />,
      3,
    ],
    'flag-gt': [
      '🇬🇹',
      <FormattedMessage defaultMessage="Guatemala flag" id="Weo9Lx" />,
      3,
    ],
    'flag-gu': [
      '🇬🇺',
      <FormattedMessage defaultMessage="Guam flag" id="cByWFJ" />,
      3,
    ],
    'flag-gw': [
      '🇬🇼',
      <FormattedMessage defaultMessage="Guinea-bissau flag" id="ej2aUb" />,
      3,
    ],
    'flag-gy': [
      '🇬🇾',
      <FormattedMessage defaultMessage="Guyana flag" id="hBQ+4M" />,
      3,
    ],
    'flag-hk': [
      '🇭🇰',
      <FormattedMessage
        defaultMessage="Hong kong sar china flag"
        id="Satc48"
      />,
      3,
    ],
    'flag-hm': [
      '🇭🇲',
      <FormattedMessage
        defaultMessage="Heard & mcdonald islands flag"
        id="u1loa2"
      />,
      3,
    ],
    'flag-hn': [
      '🇭🇳',
      <FormattedMessage defaultMessage="Honduras flag" id="4Ia9jK" />,
      3,
    ],
    'flag-hr': [
      '🇭🇷',
      <FormattedMessage defaultMessage="Croatia flag" id="+8xHKJ" />,
      3,
    ],
    'flag-ht': [
      '🇭🇹',
      <FormattedMessage defaultMessage="Haiti flag" id="qxlLHt" />,
      3,
    ],
    'flag-hu': [
      '🇭🇺',
      <FormattedMessage defaultMessage="Hungary flag" id="Tn5gHG" />,
      3,
    ],
    'flag-ic': [
      '🇮🇨',
      <FormattedMessage defaultMessage="Canary islands flag" id="Mdtvza" />,
      3,
    ],
    'flag-id': [
      '🇮🇩',
      <FormattedMessage defaultMessage="Indonesia flag" id="EsUroI" />,
      3,
    ],
    'flag-ie': [
      '🇮🇪',
      <FormattedMessage defaultMessage="Ireland flag" id="DmmaeX" />,
      3,
    ],
    'flag-il': [
      '🇮🇱',
      <FormattedMessage defaultMessage="Israel flag" id="HmZzo0" />,
      3,
    ],
    'flag-im': [
      '🇮🇲',
      <FormattedMessage defaultMessage="Isle of man flag" id="9MAzIk" />,
      3,
    ],
    'flag-in': [
      '🇮🇳',
      <FormattedMessage defaultMessage="India flag" id="CRHp3c" />,
      3,
    ],
    'flag-io': [
      '🇮🇴',
      <FormattedMessage
        defaultMessage="British indian ocean territory flag"
        id="sT+Tly"
      />,
      3,
    ],
    'flag-iq': [
      '🇮🇶',
      <FormattedMessage defaultMessage="Iraq flag" id="lKdn6E" />,
      3,
    ],
    'flag-ir': [
      '🇮🇷',
      <FormattedMessage defaultMessage="Iran flag" id="v7Y9I+" />,
      3,
    ],
    'flag-is': [
      '🇮🇸',
      <FormattedMessage defaultMessage="Iceland flag" id="z2DXDS" />,
      3,
    ],
    'flag-it': [
      '🇮🇹',
      <FormattedMessage defaultMessage="Italy flag" id="OICqee" />,
      3,
    ],
    'flag-je': [
      '🇯🇪',
      <FormattedMessage defaultMessage="Jersey flag" id="Lo488E" />,
      3,
    ],
    'flag-jm': [
      '🇯🇲',
      <FormattedMessage defaultMessage="Jamaica flag" id="SG0pO8" />,
      3,
    ],
    'flag-jo': [
      '🇯🇴',
      <FormattedMessage defaultMessage="Jordan flag" id="UTqcZa" />,
      3,
    ],
    'flag-jp': [
      '🇯🇵',
      <FormattedMessage defaultMessage="Japan flag" id="nqmM0v" />,
      3,
    ],
    'flag-ke': [
      '🇰🇪',
      <FormattedMessage defaultMessage="Kenya flag" id="6E0YjC" />,
      3,
    ],
    'flag-kg': [
      '🇰🇬',
      <FormattedMessage defaultMessage="Kyrgyzstan flag" id="+kEMrL" />,
      3,
    ],
    'flag-kh': [
      '🇰🇭',
      <FormattedMessage defaultMessage="Cambodia flag" id="tQDI+L" />,
      3,
    ],
    'flag-ki': [
      '🇰🇮',
      <FormattedMessage defaultMessage="Kiribati flag" id="iWxQX6" />,
      3,
    ],
    'flag-km': [
      '🇰🇲',
      <FormattedMessage defaultMessage="Comoros flag" id="+9wbqc" />,
      3,
    ],
    'flag-kn': [
      '🇰🇳',
      <FormattedMessage defaultMessage="St. kitts & nevis flag" id="r/rwlc" />,
      3,
    ],
    'flag-kp': [
      '🇰🇵',
      <FormattedMessage defaultMessage="North korea flag" id="ywKHPJ" />,
      3,
    ],
    'flag-kr': [
      '🇰🇷',
      <FormattedMessage defaultMessage="South korea flag" id="RNF7cg" />,
      3,
    ],
    'flag-kw': [
      '🇰🇼',
      <FormattedMessage defaultMessage="Kuwait flag" id="3KfoHk" />,
      3,
    ],
    'flag-ky': [
      '🇰🇾',
      <FormattedMessage defaultMessage="Cayman islands flag" id="6o5uow" />,
      3,
    ],
    'flag-kz': [
      '🇰🇿',
      <FormattedMessage defaultMessage="Kazakhstan flag" id="VPzzz9" />,
      3,
    ],
    'flag-la': [
      '🇱🇦',
      <FormattedMessage defaultMessage="Laos flag" id="NyWGg+" />,
      3,
    ],
    'flag-lb': [
      '🇱🇧',
      <FormattedMessage defaultMessage="Lebanon flag" id="umPNHP" />,
      3,
    ],
    'flag-lc': [
      '🇱🇨',
      <FormattedMessage defaultMessage="St. lucia flag" id="N0GPwz" />,
      3,
    ],
    'flag-li': [
      '🇱🇮',
      <FormattedMessage defaultMessage="Liechtenstein flag" id="f0TlCg" />,
      3,
    ],
    'flag-lk': [
      '🇱🇰',
      <FormattedMessage defaultMessage="Sri lanka flag" id="EzuKWv" />,
      3,
    ],
    'flag-lr': [
      '🇱🇷',
      <FormattedMessage defaultMessage="Liberia flag" id="1u60d9" />,
      3,
    ],
    'flag-ls': [
      '🇱🇸',
      <FormattedMessage defaultMessage="Lesotho flag" id="cDB/Sf" />,
      3,
    ],
    'flag-lt': [
      '🇱🇹',
      <FormattedMessage defaultMessage="Lithuania flag" id="8JWo5M" />,
      3,
    ],
    'flag-lu': [
      '🇱🇺',
      <FormattedMessage defaultMessage="Luxembourg flag" id="7Qfy2R" />,
      3,
    ],
    'flag-lv': [
      '🇱🇻',
      <FormattedMessage defaultMessage="Latvia flag" id="hkKn0C" />,
      3,
    ],
    'flag-ly': [
      '🇱🇾',
      <FormattedMessage defaultMessage="Libya flag" id="Shb7WD" />,
      3,
    ],
    'flag-ma': [
      '🇲🇦',
      <FormattedMessage defaultMessage="Morocco flag" id="1SPSID" />,
      3,
    ],
    'flag-mc': [
      '🇲🇨',
      <FormattedMessage defaultMessage="Monaco flag" id="otA0AQ" />,
      3,
    ],
    'flag-md': [
      '🇲🇩',
      <FormattedMessage defaultMessage="Moldova flag" id="y4bcYY" />,
      3,
    ],
    'flag-me': [
      '🇲🇪',
      <FormattedMessage defaultMessage="Montenegro flag" id="4eCZtg" />,
      3,
    ],
    'flag-mf': [
      '🇲🇫',
      <FormattedMessage defaultMessage="St. martin flag" id="vJTyhb" />,
      3,
    ],
    'flag-mg': [
      '🇲🇬',
      <FormattedMessage defaultMessage="Madagascar flag" id="AkGOpG" />,
      3,
    ],
    'flag-mh': [
      '🇲🇭',
      <FormattedMessage defaultMessage="Marshall islands flag" id="W0U5S9" />,
      3,
    ],
    'flag-mk': [
      '🇲🇰',
      <FormattedMessage defaultMessage="North macedonia flag" id="KfX3LE" />,
      3,
    ],
    'flag-ml': [
      '🇲🇱',
      <FormattedMessage defaultMessage="Mali flag" id="MILoIL" />,
      3,
    ],
    'flag-mm': [
      '🇲🇲',
      <FormattedMessage defaultMessage="Myanmar (burma) flag" id="efvedu" />,
      3,
    ],
    'flag-mn': [
      '🇲🇳',
      <FormattedMessage defaultMessage="Mongolia flag" id="/LAoLL" />,
      3,
    ],
    'flag-mo': [
      '🇲🇴',
      <FormattedMessage defaultMessage="Macao sar china flag" id="2fzchw" />,
      3,
    ],
    'flag-mp': [
      '🇲🇵',
      <FormattedMessage
        defaultMessage="Northern mariana islands flag"
        id="Qflkr0"
      />,
      3,
    ],
    'flag-mq': [
      '🇲🇶',
      <FormattedMessage defaultMessage="Martinique flag" id="PMvHB8" />,
      3,
    ],
    'flag-mr': [
      '🇲🇷',
      <FormattedMessage defaultMessage="Mauritania flag" id="/fCw2I" />,
      3,
    ],
    'flag-ms': [
      '🇲🇸',
      <FormattedMessage defaultMessage="Montserrat flag" id="X9R/3N" />,
      3,
    ],
    'flag-mt': [
      '🇲🇹',
      <FormattedMessage defaultMessage="Malta flag" id="h2Kuyv" />,
      3,
    ],
    'flag-mu': [
      '🇲🇺',
      <FormattedMessage defaultMessage="Mauritius flag" id="RoP7E2" />,
      3,
    ],
    'flag-mv': [
      '🇲🇻',
      <FormattedMessage defaultMessage="Maldives flag" id="lb12c9" />,
      3,
    ],
    'flag-mw': [
      '🇲🇼',
      <FormattedMessage defaultMessage="Malawi flag" id="xnIfVA" />,
      3,
    ],
    'flag-mx': [
      '🇲🇽',
      <FormattedMessage defaultMessage="Mexico flag" id="rGPvO/" />,
      3,
    ],
    'flag-my': [
      '🇲🇾',
      <FormattedMessage defaultMessage="Malaysia flag" id="7gEgVc" />,
      3,
    ],
    'flag-mz': [
      '🇲🇿',
      <FormattedMessage defaultMessage="Mozambique flag" id="hBhKC0" />,
      3,
    ],
    'flag-na': [
      '🇳🇦',
      <FormattedMessage defaultMessage="Namibia flag" id="nbwOrP" />,
      3,
    ],
    'flag-nc': [
      '🇳🇨',
      <FormattedMessage defaultMessage="New caledonia flag" id="whKtsT" />,
      3,
    ],
    'flag-ne': [
      '🇳🇪',
      <FormattedMessage defaultMessage="Niger flag" id="T2+EBV" />,
      3,
    ],
    'flag-nf': [
      '🇳🇫',
      <FormattedMessage defaultMessage="Norfolk island flag" id="K33eA2" />,
      3,
    ],
    'flag-ng': [
      '🇳🇬',
      <FormattedMessage defaultMessage="Nigeria flag" id="wmGxNl" />,
      3,
    ],
    'flag-ni': [
      '🇳🇮',
      <FormattedMessage defaultMessage="Nicaragua flag" id="K9K+ts" />,
      3,
    ],
    'flag-nl': [
      '🇳🇱',
      <FormattedMessage defaultMessage="Netherlands flag" id="pTnG7a" />,
      3,
    ],
    'flag-no': [
      '🇳🇴',
      <FormattedMessage defaultMessage="Norway flag" id="ZmSJkh" />,
      3,
    ],
    'flag-np': [
      '🇳🇵',
      <FormattedMessage defaultMessage="Nepal flag" id="NRFJ90" />,
      3,
    ],
    'flag-nr': [
      '🇳🇷',
      <FormattedMessage defaultMessage="Nauru flag" id="yMZEj1" />,
      3,
    ],
    'flag-nu': [
      '🇳🇺',
      <FormattedMessage defaultMessage="Niue flag" id="x6UM17" />,
      3,
    ],
    'flag-nz': [
      '🇳🇿',
      <FormattedMessage defaultMessage="New zealand flag" id="gro42d" />,
      3,
    ],
    'flag-om': [
      '🇴🇲',
      <FormattedMessage defaultMessage="Oman flag" id="JglMKX" />,
      3,
    ],
    'flag-pa': [
      '🇵🇦',
      <FormattedMessage defaultMessage="Panama flag" id="/LERpI" />,
      3,
    ],
    'flag-pe': [
      '🇵🇪',
      <FormattedMessage defaultMessage="Peru flag" id="9WIQGF" />,
      3,
    ],
    'flag-pf': [
      '🇵🇫',
      <FormattedMessage defaultMessage="French polynesia flag" id="drYEcj" />,
      3,
    ],
    'flag-pg': [
      '🇵🇬',
      <FormattedMessage defaultMessage="Papua new guinea flag" id="Igf2Nh" />,
      3,
    ],
    'flag-ph': [
      '🇵🇭',
      <FormattedMessage defaultMessage="Philippines flag" id="yjAlEH" />,
      3,
    ],
    'flag-pk': [
      '🇵🇰',
      <FormattedMessage defaultMessage="Pakistan flag" id="NtBnXP" />,
      3,
    ],
    'flag-pl': [
      '🇵🇱',
      <FormattedMessage defaultMessage="Poland flag" id="T7MoE0" />,
      3,
    ],
    'flag-pm': [
      '🇵🇲',
      <FormattedMessage
        defaultMessage="St. pierre & miquelon flag"
        id="HUjXeB"
      />,
      3,
    ],
    'flag-pn': [
      '🇵🇳',
      <FormattedMessage defaultMessage="Pitcairn islands flag" id="m55X9m" />,
      3,
    ],
    'flag-pr': [
      '🇵🇷',
      <FormattedMessage defaultMessage="Puerto rico flag" id="qSECj2" />,
      3,
    ],
    'flag-ps': [
      '🇵🇸',
      <FormattedMessage
        defaultMessage="Palestinian territories flag"
        id="QNcESt"
      />,
      3,
    ],
    'flag-pt': [
      '🇵🇹',
      <FormattedMessage defaultMessage="Portugal flag" id="FL0JSb" />,
      3,
    ],
    'flag-pw': [
      '🇵🇼',
      <FormattedMessage defaultMessage="Palau flag" id="nAAqOf" />,
      3,
    ],
    'flag-py': [
      '🇵🇾',
      <FormattedMessage defaultMessage="Paraguay flag" id="hh5FR8" />,
      3,
    ],
    'flag-qa': [
      '🇶🇦',
      <FormattedMessage defaultMessage="Qatar flag" id="g87AF+" />,
      3,
    ],
    'flag-re': [
      '🇷🇪',
      <FormattedMessage defaultMessage="Réunion flag" id="3XRhih" />,
      3,
    ],
    'flag-ro': [
      '🇷🇴',
      <FormattedMessage defaultMessage="Romania flag" id="OFNiO1" />,
      3,
    ],
    'flag-rs': [
      '🇷🇸',
      <FormattedMessage defaultMessage="Serbia flag" id="MhBGRr" />,
      3,
    ],
    'flag-ru': [
      '🇷🇺',
      <FormattedMessage defaultMessage="Russia flag" id="ZBvPZC" />,
      3,
    ],
    'flag-rw': [
      '🇷🇼',
      <FormattedMessage defaultMessage="Rwanda flag" id="SB9Ub3" />,
      3,
    ],
    'flag-sa': [
      '🇸🇦',
      <FormattedMessage defaultMessage="Saudi arabia flag" id="x0HGnI" />,
      3,
    ],
    'flag-sb': [
      '🇸🇧',
      <FormattedMessage defaultMessage="Solomon islands flag" id="3CFnXq" />,
      3,
    ],
    'flag-sc': [
      '🇸🇨',
      <FormattedMessage defaultMessage="Seychelles flag" id="Hi8xwj" />,
      3,
    ],
    'flag-sd': [
      '🇸🇩',
      <FormattedMessage defaultMessage="Sudan flag" id="uOM3bl" />,
      3,
    ],
    'flag-se': [
      '🇸🇪',
      <FormattedMessage defaultMessage="Sweden flag" id="RBAvew" />,
      3,
    ],
    'flag-sg': [
      '🇸🇬',
      <FormattedMessage defaultMessage="Singapore flag" id="UmrUFh" />,
      3,
    ],
    'flag-sh': [
      '🇸🇭',
      <FormattedMessage defaultMessage="St. helena flag" id="QjGi6g" />,
      3,
    ],
    'flag-si': [
      '🇸🇮',
      <FormattedMessage defaultMessage="Slovenia flag" id="JneKUY" />,
      3,
    ],
    'flag-sj': [
      '🇸🇯',
      <FormattedMessage
        defaultMessage="Svalbard & jan mayen flag"
        id="dX9CnI"
      />,
      3,
    ],
    'flag-sk': [
      '🇸🇰',
      <FormattedMessage defaultMessage="Slovakia flag" id="+GhVwS" />,
      3,
    ],
    'flag-sl': [
      '🇸🇱',
      <FormattedMessage defaultMessage="Sierra leone flag" id="bnU2UC" />,
      3,
    ],
    'flag-sm': [
      '🇸🇲',
      <FormattedMessage defaultMessage="San marino flag" id="z+SccV" />,
      3,
    ],
    'flag-sn': [
      '🇸🇳',
      <FormattedMessage defaultMessage="Senegal flag" id="srKwvb" />,
      3,
    ],
    'flag-so': [
      '🇸🇴',
      <FormattedMessage defaultMessage="Somalia flag" id="uqCX4R" />,
      3,
    ],
    'flag-sr': [
      '🇸🇷',
      <FormattedMessage defaultMessage="Suriname flag" id="t9TB7o" />,
      3,
    ],
    'flag-ss': [
      '🇸🇸',
      <FormattedMessage defaultMessage="South sudan flag" id="7BEck5" />,
      3,
    ],
    'flag-st': [
      '🇸🇹',
      <FormattedMessage
        defaultMessage="São tomé & príncipe flag"
        id="yu04ZL"
      />,
      3,
    ],
    'flag-sv': [
      '🇸🇻',
      <FormattedMessage defaultMessage="El salvador flag" id="OWoXtT" />,
      3,
    ],
    'flag-sx': [
      '🇸🇽',
      <FormattedMessage defaultMessage="Sint maarten flag" id="qqs2qH" />,
      3,
    ],
    'flag-sy': [
      '🇸🇾',
      <FormattedMessage defaultMessage="Syria flag" id="GqBbwD" />,
      3,
    ],
    'flag-sz': [
      '🇸🇿',
      <FormattedMessage defaultMessage="Eswatini flag" id="FhVOqR" />,
      3,
    ],
    'flag-ta': [
      '🇹🇦',
      <FormattedMessage defaultMessage="Tristan da cunha flag" id="5PDN6c" />,
      3,
    ],
    'flag-tc': [
      '🇹🇨',
      <FormattedMessage
        defaultMessage="Turks & caicos islands flag"
        id="A42+80"
      />,
      3,
    ],
    'flag-td': [
      '🇹🇩',
      <FormattedMessage defaultMessage="Chad flag" id="GZ/0rJ" />,
      3,
    ],
    'flag-tf': [
      '🇹🇫',
      <FormattedMessage
        defaultMessage="French southern territories flag"
        id="DbEEuO"
      />,
      3,
    ],
    'flag-tg': [
      '🇹🇬',
      <FormattedMessage defaultMessage="Togo flag" id="1MXto8" />,
      3,
    ],
    'flag-th': [
      '🇹🇭',
      <FormattedMessage defaultMessage="Thailand flag" id="R+wuH2" />,
      3,
    ],
    'flag-tj': [
      '🇹🇯',
      <FormattedMessage defaultMessage="Tajikistan flag" id="mZril/" />,
      3,
    ],
    'flag-tk': [
      '🇹🇰',
      <FormattedMessage defaultMessage="Tokelau flag" id="s5idnt" />,
      3,
    ],
    'flag-tl': [
      '🇹🇱',
      <FormattedMessage defaultMessage="Timor-leste flag" id="mbe48t" />,
      3,
    ],
    'flag-tm': [
      '🇹🇲',
      <FormattedMessage defaultMessage="Turkmenistan flag" id="uzoAQo" />,
      3,
    ],
    'flag-tn': [
      '🇹🇳',
      <FormattedMessage defaultMessage="Tunisia flag" id="zS7fd9" />,
      3,
    ],
    'flag-to': [
      '🇹🇴',
      <FormattedMessage defaultMessage="Tonga flag" id="/0rGyh" />,
      3,
    ],
    'flag-tr': [
      '🇹🇷',
      <FormattedMessage defaultMessage="Turkey flag" id="Ze0Evu" />,
      3,
    ],
    'flag-tt': [
      '🇹🇹',
      <FormattedMessage defaultMessage="Trinidad & tobago flag" id="fHEuVa" />,
      3,
    ],
    'flag-tv': [
      '🇹🇻',
      <FormattedMessage defaultMessage="Tuvalu flag" id="SWZoRu" />,
      3,
    ],
    'flag-tw': [
      '🇹🇼',
      <FormattedMessage defaultMessage="Taiwan flag" id="nqRM7z" />,
      3,
    ],
    'flag-tz': [
      '🇹🇿',
      <FormattedMessage defaultMessage="Tanzania flag" id="l5rxse" />,
      3,
    ],
    'flag-ua': [
      '🇺🇦',
      <FormattedMessage defaultMessage="Ukraine flag" id="CCCdl6" />,
      3,
    ],
    'flag-ug': [
      '🇺🇬',
      <FormattedMessage defaultMessage="Uganda flag" id="0xqvde" />,
      3,
    ],
    'flag-um': [
      '🇺🇲',
      <FormattedMessage
        defaultMessage="U.s. outlying islands flag"
        id="7yp2oX"
      />,
      3,
    ],
    'flag-un': [
      '🇺🇳',
      <FormattedMessage defaultMessage="United nations flag" id="nxUxgz" />,
      3,
    ],
    'flag-us': [
      '🇺🇸',
      <FormattedMessage defaultMessage="United states flag" id="XVgcKl" />,
      3,
    ],
    'flag-uy': [
      '🇺🇾',
      <FormattedMessage defaultMessage="Uruguay flag" id="vZVVS0" />,
      3,
    ],
    'flag-uz': [
      '🇺🇿',
      <FormattedMessage defaultMessage="Uzbekistan flag" id="4gQeag" />,
      3,
    ],
    'flag-va': [
      '🇻🇦',
      <FormattedMessage defaultMessage="Vatican city flag" id="9EfFrr" />,
      3,
    ],
    'flag-vc': [
      '🇻🇨',
      <FormattedMessage
        defaultMessage="St. vincent & grenadines flag"
        id="IzuMyV"
      />,
      3,
    ],
    'flag-ve': [
      '🇻🇪',
      <FormattedMessage defaultMessage="Venezuela flag" id="Ekf/mo" />,
      3,
    ],
    'flag-vg': [
      '🇻🇬',
      <FormattedMessage
        defaultMessage="British virgin islands flag"
        id="Hf2qDa"
      />,
      3,
    ],
    'flag-vi': [
      '🇻🇮',
      <FormattedMessage
        defaultMessage="U.s. virgin islands flag"
        id="k+dpmd"
      />,
      3,
    ],
    'flag-vn': [
      '🇻🇳',
      <FormattedMessage defaultMessage="Vietnam flag" id="tHswSm" />,
      3,
    ],
    'flag-vu': [
      '🇻🇺',
      <FormattedMessage defaultMessage="Vanuatu flag" id="ibp1lN" />,
      3,
    ],
    'flag-wf': [
      '🇼🇫',
      <FormattedMessage defaultMessage="Wallis & futuna flag" id="crJlVY" />,
      3,
    ],
    'flag-ws': [
      '🇼🇸',
      <FormattedMessage defaultMessage="Samoa flag" id="FgTMCS" />,
      3,
    ],
    'flag-xk': [
      '🇽🇰',
      <FormattedMessage defaultMessage="Kosovo flag" id="zHbHW1" />,
      3,
    ],
    'flag-ye': [
      '🇾🇪',
      <FormattedMessage defaultMessage="Yemen flag" id="rdiUxG" />,
      3,
    ],
    'flag-yt': [
      '🇾🇹',
      <FormattedMessage defaultMessage="Mayotte flag" id="OPwsvG" />,
      3,
    ],
    'flag-za': [
      '🇿🇦',
      <FormattedMessage defaultMessage="South africa flag" id="PwDsEd" />,
      3,
    ],
    'flag-zm': [
      '🇿🇲',
      <FormattedMessage defaultMessage="Zambia flag" id="yDU7Mp" />,
      3,
    ],
    'flag-zw': [
      '🇿🇼',
      <FormattedMessage defaultMessage="Zimbabwe flag" id="wFGi01" />,
      3,
    ],
    koko: [
      '🈁',
      <FormattedMessage defaultMessage="Squared katakana koko" id="p5L2nJ" />,
      8,
    ],
    sa: [
      '🈂️',
      <FormattedMessage defaultMessage="Squared katakana sa" id="xd3m6t" />,
      8,
    ],
    u7121: [
      '🈚',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-7121"
        id="GNe7oA"
      />,
      8,
    ],
    u6307: [
      '🈯',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-6307"
        id="iKG74R"
      />,
      8,
    ],
    u7981: [
      '🈲',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-7981"
        id="XWanrT"
      />,
      8,
    ],
    u7a7a: [
      '🈳',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-7a7a"
        id="vvBBLo"
      />,
      8,
    ],
    u5408: [
      '🈴',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-5408"
        id="RIzHE0"
      />,
      8,
    ],
    u6e80: [
      '🈵',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-6e80"
        id="7+tn5h"
      />,
      8,
    ],
    u6709: [
      '🈶',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-6709"
        id="G6qz/s"
      />,
      8,
    ],
    u6708: [
      '🈷️',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-6708"
        id="6dr74X"
      />,
      8,
    ],
    u7533: [
      '🈸',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-7533"
        id="Oeq5uG"
      />,
      8,
    ],
    u5272: [
      '🈹',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-5272"
        id="4wi7YV"
      />,
      8,
    ],
    u55b6: [
      '🈺',
      <FormattedMessage
        defaultMessage="Squared cjk unified ideograph-55b6"
        id="wme2L0"
      />,
      8,
    ],
    ideograph_advantage: [
      '🉐',
      <FormattedMessage
        defaultMessage="Circled ideograph advantage"
        id="eK2Ea+"
      />,
      8,
    ],
    accept: [
      '🉑',
      <FormattedMessage
        defaultMessage="Circled ideograph accept"
        id="bh1TyA"
      />,
      8,
    ],
    cyclone: ['🌀', <></>, 9],
    foggy: ['🌁', <></>, 9],
    closed_umbrella: ['🌂', <></>, 9],
    night_with_stars: ['🌃', <></>, 9],
    sunrise_over_mountains: ['🌄', <></>, 9],
    sunrise: ['🌅', <></>, 9],
    city_sunset: [
      '🌆',
      <FormattedMessage defaultMessage="Cityscape at dusk" id="QxRO5f" />,
      9,
    ],
    city_sunrise: [
      '🌇',
      <FormattedMessage defaultMessage="Sunset over buildings" id="Kdzfiy" />,
      9,
    ],
    rainbow: ['🌈', <></>, 9],
    bridge_at_night: ['🌉', <></>, 9],
    ocean: [
      '🌊',
      <FormattedMessage defaultMessage="Water wave" id="2zjLHJ" />,
      9,
    ],
    volcano: ['🌋', <></>, 9],
    milky_way: ['🌌', <></>, 9],
    earth_africa: [
      '🌍',
      <FormattedMessage
        defaultMessage="Earth globe europe-africa"
        id="qzymYb"
      />,
      9,
    ],
    earth_americas: [
      '🌎',
      <FormattedMessage defaultMessage="Earth globe americas" id="wTRB9b" />,
      9,
    ],
    earth_asia: [
      '🌏',
      <FormattedMessage
        defaultMessage="Earth globe asia-australia"
        id="CE0rrM"
      />,
      9,
    ],
    globe_with_meridians: ['🌐', <></>, 9],
    new_moon: [
      '🌑',
      <FormattedMessage defaultMessage="New moon symbol" id="Z1EVhp" />,
      9,
    ],
    waxing_crescent_moon: [
      '🌒',
      <FormattedMessage
        defaultMessage="Waxing crescent moon symbol"
        id="qIyidR"
      />,
      9,
    ],
    first_quarter_moon: [
      '🌓',
      <FormattedMessage
        defaultMessage="First quarter moon symbol"
        id="fDeT2a"
      />,
      9,
    ],
    moon: [
      '🌔',
      <FormattedMessage
        defaultMessage="Waxing gibbous moon symbol"
        id="/7tQQ+"
      />,
      9,
    ],
    full_moon: [
      '🌕',
      <FormattedMessage defaultMessage="Full moon symbol" id="Kzsz45" />,
      9,
    ],
    waning_gibbous_moon: [
      '🌖',
      <FormattedMessage
        defaultMessage="Waning gibbous moon symbol"
        id="bLuSW6"
      />,
      9,
    ],
    last_quarter_moon: [
      '🌗',
      <FormattedMessage
        defaultMessage="Last quarter moon symbol"
        id="IOgGbt"
      />,
      9,
    ],
    waning_crescent_moon: [
      '🌘',
      <FormattedMessage
        defaultMessage="Waning crescent moon symbol"
        id="5nBHi1"
      />,
      9,
    ],
    crescent_moon: ['🌙', <></>, 9],
    new_moon_with_face: ['🌚', <></>, 9],
    first_quarter_moon_with_face: ['🌛', <></>, 9],
    last_quarter_moon_with_face: ['🌜', <></>, 9],
    full_moon_with_face: ['🌝', <></>, 9],
    sun_with_face: ['🌞', <></>, 9],
    star2: [
      '🌟',
      <FormattedMessage defaultMessage="Glowing star" id="9Klktk" />,
      9,
    ],
    stars: [
      '🌠',
      <FormattedMessage defaultMessage="Shooting star" id="axz4k8" />,
      9,
    ],
    thermometer: ['🌡️', <></>, 9],
    mostly_sunny: [
      '🌤️',
      <FormattedMessage defaultMessage="Sun behind small cloud" id="C+cAGP" />,
      9,
    ],
    barely_sunny: [
      '🌥️',
      <FormattedMessage defaultMessage="Sun behind large cloud" id="I+gi9O" />,
      9,
    ],
    partly_sunny_rain: [
      '🌦️',
      <FormattedMessage defaultMessage="Sun behind rain cloud" id="qG1T+e" />,
      9,
    ],
    rain_cloud: [
      '🌧️',
      <FormattedMessage defaultMessage="Cloud with rain" id="CylkFj" />,
      9,
    ],
    snow_cloud: [
      '🌨️',
      <FormattedMessage defaultMessage="Cloud with snow" id="TwUzJH" />,
      9,
    ],
    lightning: [
      '🌩️',
      <FormattedMessage defaultMessage="Cloud with lightning" id="cZKHY1" />,
      9,
    ],
    tornado: ['🌪️', <></>, 9],
    fog: ['🌫️', <></>, 9],
    wind_blowing_face: [
      '🌬️',
      <FormattedMessage defaultMessage="Wind face" id="+SWR3D" />,
      9,
    ],
    hotdog: [
      '🌭',
      <FormattedMessage defaultMessage="Hot dog" id="UFRinY" />,
      4,
    ],
    taco: ['🌮', <></>, 4],
    burrito: ['🌯', <></>, 4],
    chestnut: ['🌰', <></>, 4],
    seedling: ['🌱', <></>, 1],
    evergreen_tree: ['🌲', <></>, 1],
    deciduous_tree: ['🌳', <></>, 1],
    palm_tree: ['🌴', <></>, 1],
    cactus: ['🌵', <></>, 1],
    hot_pepper: ['🌶️', <></>, 4],
    tulip: ['🌷', <></>, 1],
    cherry_blossom: ['🌸', <></>, 1],
    rose: ['🌹', <></>, 1],
    hibiscus: ['🌺', <></>, 1],
    sunflower: ['🌻', <></>, 1],
    blossom: ['🌼', <></>, 1],
    corn: [
      '🌽',
      <FormattedMessage defaultMessage="Ear of maize" id="XGqutt" />,
      4,
    ],
    ear_of_rice: ['🌾', <></>, 1],
    herb: ['🌿', <></>, 1],
    four_leaf_clover: ['🍀', <></>, 1],
    maple_leaf: ['🍁', <></>, 1],
    fallen_leaf: ['🍂', <></>, 1],
    leaves: [
      '🍃',
      <FormattedMessage defaultMessage="Leaf fluttering in wind" id="Mp7Ly/" />,
      1,
    ],
    mushroom: ['🍄', <></>, 4],
    tomato: ['🍅', <></>, 4],
    eggplant: [
      '🍆',
      <FormattedMessage defaultMessage="Aubergine" id="uRLXSl" />,
      4,
    ],
    grapes: ['🍇', <></>, 4],
    melon: ['🍈', <></>, 4],
    watermelon: ['🍉', <></>, 4],
    tangerine: ['🍊', <></>, 4],
    lemon: ['🍋', <></>, 4],
    banana: ['🍌', <></>, 4],
    pineapple: ['🍍', <></>, 4],
    apple: [
      '🍎',
      <FormattedMessage defaultMessage="Red apple" id="xijpbK" />,
      4,
    ],
    green_apple: ['🍏', <></>, 4],
    pear: ['🍐', <></>, 4],
    peach: ['🍑', <></>, 4],
    cherries: ['🍒', <></>, 4],
    strawberry: ['🍓', <></>, 4],
    hamburger: ['🍔', <></>, 4],
    pizza: [
      '🍕',
      <FormattedMessage defaultMessage="Slice of pizza" id="dX92uh" />,
      4,
    ],
    meat_on_bone: ['🍖', <></>, 4],
    poultry_leg: ['🍗', <></>, 4],
    rice_cracker: ['🍘', <></>, 4],
    rice_ball: ['🍙', <></>, 4],
    rice: [
      '🍚',
      <FormattedMessage defaultMessage="Cooked rice" id="VPSVKT" />,
      4,
    ],
    curry: [
      '🍛',
      <FormattedMessage defaultMessage="Curry and rice" id="e4U0k9" />,
      4,
    ],
    ramen: [
      '🍜',
      <FormattedMessage defaultMessage="Steaming bowl" id="ZfCxQk" />,
      4,
    ],
    spaghetti: ['🍝', <></>, 4],
    bread: ['🍞', <></>, 4],
    fries: [
      '🍟',
      <FormattedMessage defaultMessage="French fries" id="BOz4eW" />,
      4,
    ],
    sweet_potato: [
      '🍠',
      <FormattedMessage defaultMessage="Roasted sweet potato" id="P4EPPH" />,
      4,
    ],
    dango: ['🍡', <></>, 4],
    oden: ['🍢', <></>, 4],
    sushi: ['🍣', <></>, 4],
    fried_shrimp: ['🍤', <></>, 4],
    fish_cake: [
      '🍥',
      <FormattedMessage
        defaultMessage="Fish cake with swirl design"
        id="rvWK/d"
      />,
      4,
    ],
    icecream: [
      '🍦',
      <FormattedMessage defaultMessage="Soft ice cream" id="uKtdXn" />,
      4,
    ],
    shaved_ice: ['🍧', <></>, 4],
    ice_cream: ['🍨', <></>, 4],
    doughnut: ['🍩', <></>, 4],
    cookie: ['🍪', <></>, 4],
    chocolate_bar: ['🍫', <></>, 4],
    candy: ['🍬', <></>, 4],
    lollipop: ['🍭', <></>, 4],
    custard: ['🍮', <></>, 4],
    honey_pot: ['🍯', <></>, 4],
    cake: [
      '🍰',
      <FormattedMessage defaultMessage="Shortcake" id="itPgtb" />,
      4,
    ],
    bento: [
      '🍱',
      <FormattedMessage defaultMessage="Bento box" id="qAlSz3" />,
      4,
    ],
    stew: [
      '🍲',
      <FormattedMessage defaultMessage="Pot of food" id="GEGap8" />,
      4,
    ],
    fried_egg: [
      '🍳',
      <FormattedMessage defaultMessage="Cooking" id="v93Pi4" />,
      4,
    ],
    fork_and_knife: ['🍴', <></>, 4],
    tea: [
      '🍵',
      <FormattedMessage defaultMessage="Teacup without handle" id="7rk+rA" />,
      4,
    ],
    sake: [
      '🍶',
      <FormattedMessage defaultMessage="Sake bottle and cup" id="agCl0g" />,
      4,
    ],
    wine_glass: ['🍷', <></>, 4],
    cocktail: [
      '🍸',
      <FormattedMessage defaultMessage="Cocktail glass" id="HQdtyD" />,
      4,
    ],
    tropical_drink: ['🍹', <></>, 4],
    beer: ['🍺', <FormattedMessage defaultMessage="Beer mug" id="3d5Ee1" />, 4],
    beers: [
      '🍻',
      <FormattedMessage defaultMessage="Clinking beer mugs" id="4DeSrK" />,
      4,
    ],
    baby_bottle: ['🍼', <></>, 4],
    knife_fork_plate: [
      '🍽️',
      <FormattedMessage
        defaultMessage="Fork and knife with plate"
        id="Wgkj/F"
      />,
      4,
    ],
    champagne: [
      '🍾',
      <FormattedMessage
        defaultMessage="Bottle with popping cork"
        id="lvQNy1"
      />,
      4,
    ],
    popcorn: ['🍿', <></>, 4],
    ribbon: ['🎀', <></>, 0],
    gift: [
      '🎁',
      <FormattedMessage defaultMessage="Wrapped present" id="pzvTZl" />,
      0,
    ],
    birthday: [
      '🎂',
      <FormattedMessage defaultMessage="Birthday cake" id="t0H7an" />,
      4,
    ],
    jack_o_lantern: [
      '🎃',
      <FormattedMessage defaultMessage="Jack-o-lantern" id="TE2L3+" />,
      0,
    ],
    christmas_tree: ['🎄', <></>, 0],
    santa: [
      '🎅',
      <FormattedMessage defaultMessage="Father christmas" id="ArHsTs" />,
      6,
    ],
    fireworks: ['🎆', <></>, 0],
    sparkler: [
      '🎇',
      <FormattedMessage defaultMessage="Firework sparkler" id="njDUro" />,
      0,
    ],
    balloon: ['🎈', <></>, 0],
    tada: [
      '🎉',
      <FormattedMessage defaultMessage="Party popper" id="Q5GkVC" />,
      0,
    ],
    confetti_ball: ['🎊', <></>, 0],
    tanabata_tree: ['🎋', <></>, 0],
    crossed_flags: ['🎌', <></>, 3],
    bamboo: [
      '🎍',
      <FormattedMessage defaultMessage="Pine decoration" id="J4xN37" />,
      0,
    ],
    dolls: [
      '🎎',
      <FormattedMessage defaultMessage="Japanese dolls" id="2I05O2" />,
      0,
    ],
    flags: [
      '🎏',
      <FormattedMessage defaultMessage="Carp streamer" id="OdMUMS" />,
      0,
    ],
    wind_chime: ['🎐', <></>, 0],
    rice_scene: [
      '🎑',
      <FormattedMessage defaultMessage="Moon viewing ceremony" id="+x7MLH" />,
      0,
    ],
    school_satchel: ['🎒', <></>, 5],
    mortar_board: [
      '🎓',
      <FormattedMessage defaultMessage="Graduation cap" id="vRVroQ" />,
      5,
    ],
    medal: [
      '🎖️',
      <FormattedMessage defaultMessage="Military medal" id="P+KWHP" />,
      0,
    ],
    reminder_ribbon: ['🎗️', <></>, 0],
    studio_microphone: ['🎙️', <></>, 5],
    level_slider: ['🎚️', <></>, 5],
    control_knobs: ['🎛️', <></>, 5],
    film_frames: ['🎞️', <></>, 5],
    admission_tickets: ['🎟️', <></>, 0],
    carousel_horse: ['🎠', <></>, 9],
    ferris_wheel: ['🎡', <></>, 9],
    roller_coaster: ['🎢', <></>, 9],
    fishing_pole_and_fish: ['🎣', <></>, 0],
    microphone: ['🎤', <></>, 5],
    movie_camera: ['🎥', <></>, 5],
    cinema: ['🎦', <></>, 8],
    headphones: [
      '🎧',
      <FormattedMessage defaultMessage="Headphone" id="pcM/pm" />,
      5,
    ],
    art: [
      '🎨',
      <FormattedMessage defaultMessage="Artist palette" id="paUhuh" />,
      0,
    ],
    tophat: [
      '🎩',
      <FormattedMessage defaultMessage="Top hat" id="I1TXhr" />,
      5,
    ],
    circus_tent: ['🎪', <></>, 9],
    ticket: ['🎫', <></>, 0],
    clapper: [
      '🎬',
      <FormattedMessage defaultMessage="Clapper board" id="Rzhh2B" />,
      5,
    ],
    performing_arts: ['🎭', <></>, 0],
    video_game: ['🎮', <></>, 0],
    dart: [
      '🎯',
      <FormattedMessage defaultMessage="Direct hit" id="XW4DHH" />,
      0,
    ],
    slot_machine: ['🎰', <></>, 0],
    '8ball': [
      '🎱',
      <FormattedMessage defaultMessage="Billiards" id="9cH1ZM" />,
      0,
    ],
    game_die: ['🎲', <></>, 0],
    bowling: ['🎳', <></>, 0],
    flower_playing_cards: ['🎴', <></>, 0],
    musical_note: ['🎵', <></>, 5],
    notes: [
      '🎶',
      <FormattedMessage defaultMessage="Multiple musical notes" id="g2jhd5" />,
      5,
    ],
    saxophone: ['🎷', <></>, 5],
    guitar: ['🎸', <></>, 5],
    musical_keyboard: ['🎹', <></>, 5],
    trumpet: ['🎺', <></>, 5],
    violin: ['🎻', <></>, 5],
    musical_score: ['🎼', <></>, 5],
    running_shirt_with_sash: ['🎽', <></>, 0],
    tennis: [
      '🎾',
      <FormattedMessage defaultMessage="Tennis racquet and ball" id="SyBWDj" />,
      0,
    ],
    ski: [
      '🎿',
      <FormattedMessage defaultMessage="Ski and ski boot" id="5jKc/L" />,
      0,
    ],
    basketball: [
      '🏀',
      <FormattedMessage defaultMessage="Basketball and hoop" id="xp4XzZ" />,
      0,
    ],
    checkered_flag: [
      '🏁',
      <FormattedMessage defaultMessage="Chequered flag" id="fthYWC" />,
      3,
    ],
    snowboarder: ['🏂', <></>, 6],
    'woman-running': [
      '🏃‍♀️',
      <FormattedMessage defaultMessage="Woman running" id="ZWp2x5" />,
      6,
    ],
    'man-running': [
      '🏃‍♂️',
      <FormattedMessage defaultMessage="Man running" id="bCYJ9N" />,
      6,
    ],
    runner: ['🏃', <></>, 6],
    'woman-surfing': [
      '🏄‍♀️',
      <FormattedMessage defaultMessage="Woman surfing" id="2Rtt+L" />,
      6,
    ],
    'man-surfing': [
      '🏄‍♂️',
      <FormattedMessage defaultMessage="Man surfing" id="QXdZfD" />,
      6,
    ],
    surfer: ['🏄', <></>, 6],
    sports_medal: ['🏅', <></>, 0],
    trophy: ['🏆', <></>, 0],
    horse_racing: ['🏇', <></>, 6],
    football: [
      '🏈',
      <FormattedMessage defaultMessage="American football" id="8jhahv" />,
      0,
    ],
    rugby_football: ['🏉', <></>, 0],
    'woman-swimming': [
      '🏊‍♀️',
      <FormattedMessage defaultMessage="Woman swimming" id="1FU0A1" />,
      6,
    ],
    'man-swimming': [
      '🏊‍♂️',
      <FormattedMessage defaultMessage="Man swimming" id="/bGpwo" />,
      6,
    ],
    swimmer: ['🏊', <></>, 6],
    'woman-lifting-weights': [
      '🏋️‍♀️',
      <FormattedMessage defaultMessage="Woman lifting weights" id="7U2+2+" />,
      6,
    ],
    'man-lifting-weights': [
      '🏋️‍♂️',
      <FormattedMessage defaultMessage="Man lifting weights" id="Z0FHE4" />,
      6,
    ],
    weight_lifter: [
      '🏋️',
      <FormattedMessage defaultMessage="Person lifting weights" id="OjxTD+" />,
      6,
    ],
    'woman-golfing': [
      '🏌️‍♀️',
      <FormattedMessage defaultMessage="Woman golfing" id="mKzO9/" />,
      6,
    ],
    'man-golfing': [
      '🏌️‍♂️',
      <FormattedMessage defaultMessage="Man golfing" id="5LRglM" />,
      6,
    ],
    golfer: [
      '🏌️',
      <FormattedMessage defaultMessage="Person golfing" id="Thq0Rw" />,
      6,
    ],
    racing_motorcycle: [
      '🏍️',
      <FormattedMessage defaultMessage="Motorcycle" id="K4w4ci" />,
      9,
    ],
    racing_car: ['🏎️', <></>, 9],
    cricket_bat_and_ball: ['🏏', <></>, 0],
    volleyball: ['🏐', <></>, 0],
    field_hockey_stick_and_ball: ['🏑', <></>, 0],
    ice_hockey_stick_and_puck: ['🏒', <></>, 0],
    table_tennis_paddle_and_ball: ['🏓', <></>, 0],
    snow_capped_mountain: [
      '🏔️',
      <FormattedMessage defaultMessage="Snow-capped mountain" id="FU4Ymd" />,
      9,
    ],
    camping: ['🏕️', <></>, 9],
    beach_with_umbrella: ['🏖️', <></>, 9],
    building_construction: ['🏗️', <></>, 9],
    house_buildings: [
      '🏘️',
      <FormattedMessage defaultMessage="Houses" id="9PAVKV" />,
      9,
    ],
    cityscape: ['🏙️', <></>, 9],
    derelict_house_building: [
      '🏚️',
      <FormattedMessage defaultMessage="Derelict house" id="k4ykHt" />,
      9,
    ],
    classical_building: ['🏛️', <></>, 9],
    desert: ['🏜️', <></>, 9],
    desert_island: ['🏝️', <></>, 9],
    national_park: ['🏞️', <></>, 9],
    stadium: ['🏟️', <></>, 9],
    house: [
      '🏠',
      <FormattedMessage defaultMessage="House building" id="gVfHmJ" />,
      9,
    ],
    house_with_garden: ['🏡', <></>, 9],
    office: [
      '🏢',
      <FormattedMessage defaultMessage="Office building" id="bZ9qfb" />,
      9,
    ],
    post_office: [
      '🏣',
      <FormattedMessage defaultMessage="Japanese post office" id="XNljqV" />,
      9,
    ],
    european_post_office: ['🏤', <></>, 9],
    hospital: ['🏥', <></>, 9],
    bank: ['🏦', <></>, 9],
    atm: [
      '🏧',
      <FormattedMessage
        defaultMessage="Automated teller machine"
        id="akf86l"
      />,
      8,
    ],
    hotel: ['🏨', <></>, 9],
    love_hotel: ['🏩', <></>, 9],
    convenience_store: ['🏪', <></>, 9],
    school: ['🏫', <></>, 9],
    department_store: ['🏬', <></>, 9],
    factory: ['🏭', <></>, 9],
    izakaya_lantern: ['🏮', <></>, 5],
    japanese_castle: ['🏯', <></>, 9],
    european_castle: ['🏰', <></>, 9],
    'rainbow-flag': [
      '🏳️‍🌈',
      <FormattedMessage defaultMessage="Rainbow flag" id="eag/nQ" />,
      3,
    ],
    transgender_flag: ['🏳️‍⚧️', <></>, 3],
    waving_white_flag: [
      '🏳️',
      <FormattedMessage defaultMessage="White flag" id="Wfg/Yo" />,
      3,
    ],
    pirate_flag: ['🏴‍☠️', <></>, 3],
    'flag-england': [
      '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      <FormattedMessage defaultMessage="England flag" id="2ZlH/9" />,
      3,
    ],
    'flag-scotland': [
      '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      <FormattedMessage defaultMessage="Scotland flag" id="EyBfrn" />,
      3,
    ],
    'flag-wales': [
      '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
      <FormattedMessage defaultMessage="Wales flag" id="Zq49rW" />,
      3,
    ],
    waving_black_flag: ['🏴', <></>, 3],
    rosette: ['🏵️', <></>, 1],
    label: ['🏷️', <></>, 5],
    badminton_racquet_and_shuttlecock: ['🏸', <></>, 0],
    bow_and_arrow: ['🏹', <></>, 5],
    amphora: ['🏺', <></>, 4],
    'skin-tone-2': [
      '🏻',
      <FormattedMessage
        defaultMessage="Emoji modifier fitzpatrick type-1-2"
        id="zxIseb"
      />,
      2,
    ],
    'skin-tone-3': [
      '🏼',
      <FormattedMessage
        defaultMessage="Emoji modifier fitzpatrick type-3"
        id="RpIZNA"
      />,
      2,
    ],
    'skin-tone-4': [
      '🏽',
      <FormattedMessage
        defaultMessage="Emoji modifier fitzpatrick type-4"
        id="oosN+O"
      />,
      2,
    ],
    'skin-tone-5': [
      '🏾',
      <FormattedMessage
        defaultMessage="Emoji modifier fitzpatrick type-5"
        id="yFdX/g"
      />,
      2,
    ],
    'skin-tone-6': [
      '🏿',
      <FormattedMessage
        defaultMessage="Emoji modifier fitzpatrick type-6"
        id="DQDS2L"
      />,
      2,
    ],
    rat: ['🐀', <></>, 1],
    mouse2: ['🐁', <FormattedMessage defaultMessage="Mouse" id="55H791" />, 1],
    ox: ['🐂', <></>, 1],
    water_buffalo: ['🐃', <></>, 1],
    cow2: ['🐄', <FormattedMessage defaultMessage="Cow" id="KBwumD" />, 1],
    tiger2: ['🐅', <FormattedMessage defaultMessage="Tiger" id="fOCll+" />, 1],
    leopard: ['🐆', <></>, 1],
    rabbit2: [
      '🐇',
      <FormattedMessage defaultMessage="Rabbit" id="hpAfj+" />,
      1,
    ],
    black_cat: ['🐈‍⬛', <></>, 1],
    cat2: ['🐈', <FormattedMessage defaultMessage="Cat" id="CVNvcT" />, 1],
    dragon: ['🐉', <></>, 1],
    crocodile: ['🐊', <></>, 1],
    whale2: ['🐋', <FormattedMessage defaultMessage="Whale" id="VI8SzH" />, 1],
    snail: ['🐌', <></>, 1],
    snake: ['🐍', <></>, 1],
    racehorse: [
      '🐎',
      <FormattedMessage defaultMessage="Horse" id="wZsBSy" />,
      1,
    ],
    ram: ['🐏', <></>, 1],
    goat: ['🐐', <></>, 1],
    sheep: ['🐑', <></>, 1],
    monkey: ['🐒', <></>, 1],
    rooster: ['🐓', <></>, 1],
    chicken: ['🐔', <></>, 1],
    service_dog: ['🐕‍🦺', <></>, 1],
    dog2: ['🐕', <FormattedMessage defaultMessage="Dog" id="bjTpk9" />, 1],
    pig2: ['🐖', <FormattedMessage defaultMessage="Pig" id="wSg5si" />, 1],
    boar: ['🐗', <></>, 1],
    elephant: ['🐘', <></>, 1],
    octopus: ['🐙', <></>, 1],
    shell: [
      '🐚',
      <FormattedMessage defaultMessage="Spiral shell" id="A+DlVC" />,
      1,
    ],
    bug: ['🐛', <></>, 1],
    ant: ['🐜', <></>, 1],
    bee: ['🐝', <FormattedMessage defaultMessage="Honeybee" id="4aakfe" />, 1],
    ladybug: [
      '🐞',
      <FormattedMessage defaultMessage="Lady beetle" id="Uucc/E" />,
      1,
    ],
    fish: ['🐟', <></>, 1],
    tropical_fish: ['🐠', <></>, 1],
    blowfish: ['🐡', <></>, 1],
    turtle: ['🐢', <></>, 1],
    hatching_chick: ['🐣', <></>, 1],
    baby_chick: ['🐤', <></>, 1],
    hatched_chick: [
      '🐥',
      <FormattedMessage defaultMessage="Front-facing baby chick" id="NuxmyD" />,
      1,
    ],
    bird: ['🐦', <></>, 1],
    penguin: ['🐧', <></>, 1],
    koala: ['🐨', <></>, 1],
    poodle: ['🐩', <></>, 1],
    dromedary_camel: ['🐪', <></>, 1],
    camel: [
      '🐫',
      <FormattedMessage defaultMessage="Bactrian camel" id="buKQRD" />,
      1,
    ],
    dolphin: ['🐬', <></>, 1],
    mouse: [
      '🐭',
      <FormattedMessage defaultMessage="Mouse face" id="EHCtCU" />,
      1,
    ],
    cow: ['🐮', <FormattedMessage defaultMessage="Cow face" id="JyHN9m" />, 1],
    tiger: [
      '🐯',
      <FormattedMessage defaultMessage="Tiger face" id="iSRYgP" />,
      1,
    ],
    rabbit: [
      '🐰',
      <FormattedMessage defaultMessage="Rabbit face" id="8CcKys" />,
      1,
    ],
    cat: ['🐱', <FormattedMessage defaultMessage="Cat face" id="jbJkZW" />, 1],
    dragon_face: ['🐲', <></>, 1],
    whale: [
      '🐳',
      <FormattedMessage defaultMessage="Spouting whale" id="3rIG/f" />,
      1,
    ],
    horse: [
      '🐴',
      <FormattedMessage defaultMessage="Horse face" id="hbDG3j" />,
      1,
    ],
    monkey_face: ['🐵', <></>, 1],
    dog: ['🐶', <FormattedMessage defaultMessage="Dog face" id="mXFop5" />, 1],
    pig: ['🐷', <FormattedMessage defaultMessage="Pig face" id="svh5TW" />, 1],
    frog: [
      '🐸',
      <FormattedMessage defaultMessage="Frog face" id="1ksLWZ" />,
      1,
    ],
    hamster: [
      '🐹',
      <FormattedMessage defaultMessage="Hamster face" id="PmvsLX" />,
      1,
    ],
    wolf: [
      '🐺',
      <FormattedMessage defaultMessage="Wolf face" id="462ZCl" />,
      1,
    ],
    polar_bear: ['🐻‍❄️', <></>, 1],
    bear: [
      '🐻',
      <FormattedMessage defaultMessage="Bear face" id="WMGJHE" />,
      1,
    ],
    panda_face: ['🐼', <></>, 1],
    pig_nose: ['🐽', <></>, 1],
    feet: [
      '🐾',
      <FormattedMessage defaultMessage="Paw prints" id="PwwWDT" />,
      1,
    ],
    chipmunk: ['🐿️', <></>, 1],
    eyes: ['👀', <></>, 6],
    'eye-in-speech-bubble': [
      '👁️‍🗨️',
      <FormattedMessage defaultMessage="Eye in speech bubble" id="jExn6Z" />,
      7,
    ],
    eye: ['👁️', <></>, 6],
    ear: ['👂', <></>, 6],
    nose: ['👃', <></>, 6],
    lips: ['👄', <FormattedMessage defaultMessage="Mouth" id="XzwKaV" />, 6],
    tongue: ['👅', <></>, 6],
    point_up_2: [
      '👆',
      <FormattedMessage
        defaultMessage="White up pointing backhand index"
        id="JVhdNu"
      />,
      6,
    ],
    point_down: [
      '👇',
      <FormattedMessage
        defaultMessage="White down pointing backhand index"
        id="fwVm5K"
      />,
      6,
    ],
    point_left: [
      '👈',
      <FormattedMessage
        defaultMessage="White left pointing backhand index"
        id="sPE/zR"
      />,
      6,
    ],
    point_right: [
      '👉',
      <FormattedMessage
        defaultMessage="White right pointing backhand index"
        id="CsPPJB"
      />,
      6,
    ],
    facepunch: [
      '👊',
      <FormattedMessage defaultMessage="Fisted hand sign" id="2F3sav" />,
      6,
    ],
    wave: [
      '👋',
      <FormattedMessage defaultMessage="Waving hand sign" id="JO1oLo" />,
      6,
    ],
    ok_hand: [
      '👌',
      <FormattedMessage defaultMessage="Ok hand sign" id="uJeZcY" />,
      6,
    ],
    '+1': [
      '👍',
      <FormattedMessage defaultMessage="Thumbs up sign" id="gG3T7Y" />,
      6,
    ],
    '-1': [
      '👎',
      <FormattedMessage defaultMessage="Thumbs down sign" id="9k1FCw" />,
      6,
    ],
    clap: [
      '👏',
      <FormattedMessage defaultMessage="Clapping hands sign" id="3nOroQ" />,
      6,
    ],
    open_hands: [
      '👐',
      <FormattedMessage defaultMessage="Open hands sign" id="1qVSuh" />,
      6,
    ],
    crown: ['👑', <></>, 5],
    womans_hat: ['👒', <></>, 5],
    eyeglasses: ['👓', <></>, 5],
    necktie: ['👔', <></>, 5],
    shirt: ['👕', <FormattedMessage defaultMessage="T-shirt" id="b/abWP" />, 5],
    jeans: ['👖', <></>, 5],
    dress: ['👗', <></>, 5],
    kimono: ['👘', <></>, 5],
    bikini: ['👙', <></>, 5],
    womans_clothes: ['👚', <></>, 5],
    purse: ['👛', <></>, 5],
    handbag: ['👜', <></>, 5],
    pouch: ['👝', <></>, 5],
    mans_shoe: ['👞', <></>, 5],
    athletic_shoe: ['👟', <></>, 5],
    high_heel: [
      '👠',
      <FormattedMessage defaultMessage="High-heeled shoe" id="Q7VglI" />,
      5,
    ],
    sandal: [
      '👡',
      <FormattedMessage defaultMessage="Womans sandal" id="oG7eBJ" />,
      5,
    ],
    boot: [
      '👢',
      <FormattedMessage defaultMessage="Womans boots" id="5Iz/ro" />,
      5,
    ],
    footprints: ['👣', <></>, 6],
    bust_in_silhouette: ['👤', <></>, 6],
    busts_in_silhouette: ['👥', <></>, 6],
    boy: ['👦', <></>, 6],
    girl: ['👧', <></>, 6],
    'male-farmer': [
      '👨‍🌾',
      <FormattedMessage defaultMessage="Man farmer" id="rchL7u" />,
      6,
    ],
    'male-cook': [
      '👨‍🍳',
      <FormattedMessage defaultMessage="Man cook" id="bjYiDf" />,
      6,
    ],
    man_feeding_baby: ['👨‍🍼', <></>, 6],
    'male-student': [
      '👨‍🎓',
      <FormattedMessage defaultMessage="Man student" id="cq2NhR" />,
      6,
    ],
    'male-singer': [
      '👨‍🎤',
      <FormattedMessage defaultMessage="Man singer" id="HbA7f+" />,
      6,
    ],
    'male-artist': [
      '👨‍🎨',
      <FormattedMessage defaultMessage="Man artist" id="W5khGo" />,
      6,
    ],
    'male-teacher': [
      '👨‍🏫',
      <FormattedMessage defaultMessage="Man teacher" id="3Sx6oY" />,
      6,
    ],
    'male-factory-worker': [
      '👨‍🏭',
      <FormattedMessage defaultMessage="Man factory worker" id="V2/Y6F" />,
      6,
    ],
    'man-boy-boy': [
      '👨‍👦‍👦',
      <FormattedMessage defaultMessage="Family: man, boy, boy" id="C3M3Au" />,
      6,
    ],
    'man-boy': [
      '👨‍👦',
      <FormattedMessage defaultMessage="Family: man, boy" id="QrJOBG" />,
      6,
    ],
    'man-girl-boy': [
      '👨‍👧‍👦',
      <FormattedMessage defaultMessage="Family: man, girl, boy" id="S/GZo4" />,
      6,
    ],
    'man-girl-girl': [
      '👨‍👧‍👧',
      <FormattedMessage defaultMessage="Family: man, girl, girl" id="f1Kl5a" />,
      6,
    ],
    'man-girl': [
      '👨‍👧',
      <FormattedMessage defaultMessage="Family: man, girl" id="Qpo/qd" />,
      6,
    ],
    'man-man-boy': [
      '👨‍👨‍👦',
      <FormattedMessage defaultMessage="Family: man, man, boy" id="rTmZSW" />,
      6,
    ],
    'man-man-boy-boy': [
      '👨‍👨‍👦‍👦',
      <FormattedMessage
        defaultMessage="Family: man, man, boy, boy"
        id="N/Fvpt"
      />,
      6,
    ],
    'man-man-girl': [
      '👨‍👨‍👧',
      <FormattedMessage defaultMessage="Family: man, man, girl" id="ovs++7" />,
      6,
    ],
    'man-man-girl-boy': [
      '👨‍👨‍👧‍👦',
      <FormattedMessage
        defaultMessage="Family: man, man, girl, boy"
        id="D/NmvW"
      />,
      6,
    ],
    'man-man-girl-girl': [
      '👨‍👨‍👧‍👧',
      <FormattedMessage
        defaultMessage="Family: man, man, girl, girl"
        id="jXG4tr"
      />,
      6,
    ],
    'man-woman-boy': [
      '👨‍👩‍👦',
      <FormattedMessage defaultMessage="Family: man, woman, boy" id="uW7KdG" />,
      6,
    ],
    'man-woman-boy-boy': [
      '👨‍👩‍👦‍👦',
      <FormattedMessage
        defaultMessage="Family: man, woman, boy, boy"
        id="OrzPT/"
      />,
      6,
    ],
    'man-woman-girl': [
      '👨‍👩‍👧',
      <FormattedMessage
        defaultMessage="Family: man, woman, girl"
        id="5Quk2r"
      />,
      6,
    ],
    'man-woman-girl-boy': [
      '👨‍👩‍👧‍👦',
      <FormattedMessage
        defaultMessage="Family: man, woman, girl, boy"
        id="OE+8TX"
      />,
      6,
    ],
    'man-woman-girl-girl': [
      '👨‍👩‍👧‍👧',
      <FormattedMessage
        defaultMessage="Family: man, woman, girl, girl"
        id="Gpqu7x"
      />,
      6,
    ],
    'male-technologist': [
      '👨‍💻',
      <FormattedMessage defaultMessage="Man technologist" id="ULAVMv" />,
      6,
    ],
    'male-office-worker': [
      '👨‍💼',
      <FormattedMessage defaultMessage="Man office worker" id="lFsytD" />,
      6,
    ],
    'male-mechanic': [
      '👨‍🔧',
      <FormattedMessage defaultMessage="Man mechanic" id="ks/EwG" />,
      6,
    ],
    'male-scientist': [
      '👨‍🔬',
      <FormattedMessage defaultMessage="Man scientist" id="r6xK51" />,
      6,
    ],
    'male-astronaut': [
      '👨‍🚀',
      <FormattedMessage defaultMessage="Man astronaut" id="TK4lR4" />,
      6,
    ],
    'male-firefighter': [
      '👨‍🚒',
      <FormattedMessage defaultMessage="Man firefighter" id="epy/oY" />,
      6,
    ],
    man_with_probing_cane: [
      '👨‍🦯',
      <FormattedMessage defaultMessage="Man with white cane" id="6Jz/4Y" />,
      6,
    ],
    red_haired_man: [
      '👨‍🦰',
      <FormattedMessage defaultMessage="Man: red hair" id="8cRPIP" />,
      6,
    ],
    curly_haired_man: [
      '👨‍🦱',
      <FormattedMessage defaultMessage="Man: curly hair" id="tTC6Ru" />,
      6,
    ],
    bald_man: [
      '👨‍🦲',
      <FormattedMessage defaultMessage="Man: bald" id="Xpbdp4" />,
      6,
    ],
    white_haired_man: [
      '👨‍🦳',
      <FormattedMessage defaultMessage="Man: white hair" id="nm/6Cx" />,
      6,
    ],
    man_in_motorized_wheelchair: ['👨‍🦼', <></>, 6],
    man_in_manual_wheelchair: ['👨‍🦽', <></>, 6],
    'male-doctor': [
      '👨‍⚕️',
      <FormattedMessage defaultMessage="Man health worker" id="P8gFek" />,
      6,
    ],
    'male-judge': [
      '👨‍⚖️',
      <FormattedMessage defaultMessage="Man judge" id="FF6v5Y" />,
      6,
    ],
    'male-pilot': [
      '👨‍✈️',
      <FormattedMessage defaultMessage="Man pilot" id="HAhXA7" />,
      6,
    ],
    'man-heart-man': [
      '👨‍❤️‍👨',
      <FormattedMessage
        defaultMessage="Couple with heart: man, man"
        id="ZIxtRH"
      />,
      6,
    ],
    'man-kiss-man': [
      '👨‍❤️‍💋‍👨',
      <FormattedMessage defaultMessage="Kiss: man, man" id="Ta8KAl" />,
      6,
    ],
    man: ['👨', <></>, 6],
    'female-farmer': [
      '👩‍🌾',
      <FormattedMessage defaultMessage="Woman farmer" id="JQyH2v" />,
      6,
    ],
    'female-cook': [
      '👩‍🍳',
      <FormattedMessage defaultMessage="Woman cook" id="DUpQON" />,
      6,
    ],
    woman_feeding_baby: ['👩‍🍼', <></>, 6],
    'female-student': [
      '👩‍🎓',
      <FormattedMessage defaultMessage="Woman student" id="9Rdx83" />,
      6,
    ],
    'female-singer': [
      '👩‍🎤',
      <FormattedMessage defaultMessage="Woman singer" id="KDFyU7" />,
      6,
    ],
    'female-artist': [
      '👩‍🎨',
      <FormattedMessage defaultMessage="Woman artist" id="Chsxmt" />,
      6,
    ],
    'female-teacher': [
      '👩‍🏫',
      <FormattedMessage defaultMessage="Woman teacher" id="AleSoV" />,
      6,
    ],
    'female-factory-worker': [
      '👩‍🏭',
      <FormattedMessage defaultMessage="Woman factory worker" id="110KsT" />,
      6,
    ],
    'woman-boy-boy': [
      '👩‍👦‍👦',
      <FormattedMessage defaultMessage="Family: woman, boy, boy" id="oa/vPv" />,
      6,
    ],
    'woman-boy': [
      '👩‍👦',
      <FormattedMessage defaultMessage="Family: woman, boy" id="6knToP" />,
      6,
    ],
    'woman-girl-boy': [
      '👩‍👧‍👦',
      <FormattedMessage
        defaultMessage="Family: woman, girl, boy"
        id="JFs1lF"
      />,
      6,
    ],
    'woman-girl-girl': [
      '👩‍👧‍👧',
      <FormattedMessage
        defaultMessage="Family: woman, girl, girl"
        id="OoWfYY"
      />,
      6,
    ],
    'woman-girl': [
      '👩‍👧',
      <FormattedMessage defaultMessage="Family: woman, girl" id="qX7cvs" />,
      6,
    ],
    'woman-woman-boy': [
      '👩‍👩‍👦',
      <FormattedMessage
        defaultMessage="Family: woman, woman, boy"
        id="1JvDN2"
      />,
      6,
    ],
    'woman-woman-boy-boy': [
      '👩‍👩‍👦‍👦',
      <FormattedMessage
        defaultMessage="Family: woman, woman, boy, boy"
        id="uR4/sN"
      />,
      6,
    ],
    'woman-woman-girl': [
      '👩‍👩‍👧',
      <FormattedMessage
        defaultMessage="Family: woman, woman, girl"
        id="wt8YEL"
      />,
      6,
    ],
    'woman-woman-girl-boy': [
      '👩‍👩‍👧‍👦',
      <FormattedMessage
        defaultMessage="Family: woman, woman, girl, boy"
        id="4xbmog"
      />,
      6,
    ],
    'woman-woman-girl-girl': [
      '👩‍👩‍👧‍👧',
      <FormattedMessage
        defaultMessage="Family: woman, woman, girl, girl"
        id="BsX95k"
      />,
      6,
    ],
    'female-technologist': [
      '👩‍💻',
      <FormattedMessage defaultMessage="Woman technologist" id="JZ0Jbc" />,
      6,
    ],
    'female-office-worker': [
      '👩‍💼',
      <FormattedMessage defaultMessage="Woman office worker" id="xpOMGT" />,
      6,
    ],
    'female-mechanic': [
      '👩‍🔧',
      <FormattedMessage defaultMessage="Woman mechanic" id="RIxR4O" />,
      6,
    ],
    'female-scientist': [
      '👩‍🔬',
      <FormattedMessage defaultMessage="Woman scientist" id="RwDsGh" />,
      6,
    ],
    'female-astronaut': [
      '👩‍🚀',
      <FormattedMessage defaultMessage="Woman astronaut" id="k+PcuN" />,
      6,
    ],
    'female-firefighter': [
      '👩‍🚒',
      <FormattedMessage defaultMessage="Woman firefighter" id="GNfZ3s" />,
      6,
    ],
    woman_with_probing_cane: [
      '👩‍🦯',
      <FormattedMessage defaultMessage="Woman with white cane" id="F02x56" />,
      6,
    ],
    red_haired_woman: [
      '👩‍🦰',
      <FormattedMessage defaultMessage="Woman: red hair" id="dTQgw9" />,
      6,
    ],
    curly_haired_woman: [
      '👩‍🦱',
      <FormattedMessage defaultMessage="Woman: curly hair" id="TJjZ3Y" />,
      6,
    ],
    bald_woman: [
      '👩‍🦲',
      <FormattedMessage defaultMessage="Woman: bald" id="IMYoqq" />,
      6,
    ],
    white_haired_woman: [
      '👩‍🦳',
      <FormattedMessage defaultMessage="Woman: white hair" id="ShDgMS" />,
      6,
    ],
    woman_in_motorized_wheelchair: ['👩‍🦼', <></>, 6],
    woman_in_manual_wheelchair: ['👩‍🦽', <></>, 6],
    'female-doctor': [
      '👩‍⚕️',
      <FormattedMessage defaultMessage="Woman health worker" id="L/bRz3" />,
      6,
    ],
    'female-judge': [
      '👩‍⚖️',
      <FormattedMessage defaultMessage="Woman judge" id="iRP81O" />,
      6,
    ],
    'female-pilot': [
      '👩‍✈️',
      <FormattedMessage defaultMessage="Woman pilot" id="Nk1TQC" />,
      6,
    ],
    'woman-heart-man': [
      '👩‍❤️‍👨',
      <FormattedMessage
        defaultMessage="Couple with heart: woman, man"
        id="fnStCc"
      />,
      6,
    ],
    'woman-heart-woman': [
      '👩‍❤️‍👩',
      <FormattedMessage
        defaultMessage="Couple with heart: woman, woman"
        id="TqiYc/"
      />,
      6,
    ],
    'woman-kiss-man': [
      '👩‍❤️‍💋‍👨',
      <FormattedMessage defaultMessage="Kiss: woman, man" id="wFazn7" />,
      6,
    ],
    'woman-kiss-woman': [
      '👩‍❤️‍💋‍👩',
      <FormattedMessage defaultMessage="Kiss: woman, woman" id="VSVdp/" />,
      6,
    ],
    woman: ['👩', <></>, 6],
    family: ['👪', <></>, 6],
    man_and_woman_holding_hands: ['👫', <></>, 6],
    two_men_holding_hands: ['👬', <></>, 6],
    two_women_holding_hands: ['👭', <></>, 6],
    'female-police-officer': [
      '👮‍♀️',
      <FormattedMessage defaultMessage="Woman police officer" id="C0sym6" />,
      6,
    ],
    'male-police-officer': [
      '👮‍♂️',
      <FormattedMessage defaultMessage="Man police officer" id="L/vOUK" />,
      6,
    ],
    cop: [
      '👮',
      <FormattedMessage defaultMessage="Police officer" id="BJEUZG" />,
      6,
    ],
    'women-with-bunny-ears-partying': [
      '👯‍♀️',
      <FormattedMessage defaultMessage="Women with bunny ears" id="LUF2xP" />,
      6,
    ],
    'men-with-bunny-ears-partying': [
      '👯‍♂️',
      <FormattedMessage defaultMessage="Men with bunny ears" id="jQNBN9" />,
      6,
    ],
    dancers: [
      '👯',
      <FormattedMessage defaultMessage="Woman with bunny ears" id="A95P/u" />,
      6,
    ],
    woman_with_veil: ['👰‍♀️', <></>, 6],
    man_with_veil: ['👰‍♂️', <></>, 6],
    bride_with_veil: ['👰', <></>, 6],
    'blond-haired-woman': [
      '👱‍♀️',
      <FormattedMessage defaultMessage="Woman: blond hair" id="bII52w" />,
      6,
    ],
    'blond-haired-man': [
      '👱‍♂️',
      <FormattedMessage defaultMessage="Man: blond hair" id="x1L55L" />,
      6,
    ],
    person_with_blond_hair: ['👱', <></>, 6],
    man_with_gua_pi_mao: ['👲', <></>, 6],
    'woman-wearing-turban': [
      '👳‍♀️',
      <FormattedMessage defaultMessage="Woman wearing turban" id="u6HPRm" />,
      6,
    ],
    'man-wearing-turban': [
      '👳‍♂️',
      <FormattedMessage defaultMessage="Man wearing turban" id="Jk+1ej" />,
      6,
    ],
    man_with_turban: ['👳', <></>, 6],
    older_man: ['👴', <></>, 6],
    older_woman: ['👵', <></>, 6],
    baby: ['👶', <></>, 6],
    'female-construction-worker': [
      '👷‍♀️',
      <FormattedMessage
        defaultMessage="Woman construction worker"
        id="SCD6LB"
      />,
      6,
    ],
    'male-construction-worker': [
      '👷‍♂️',
      <FormattedMessage defaultMessage="Man construction worker" id="DjPv1j" />,
      6,
    ],
    construction_worker: ['👷', <></>, 6],
    princess: ['👸', <></>, 6],
    japanese_ogre: ['👹', <></>, 7],
    japanese_goblin: ['👺', <></>, 7],
    ghost: ['👻', <></>, 7],
    angel: [
      '👼',
      <FormattedMessage defaultMessage="Baby angel" id="Ml4/n3" />,
      6,
    ],
    alien: [
      '👽',
      <FormattedMessage defaultMessage="Extraterrestrial alien" id="+5zgUE" />,
      7,
    ],
    space_invader: [
      '👾',
      <FormattedMessage defaultMessage="Alien monster" id="P15nnb" />,
      7,
    ],
    imp: ['👿', <></>, 7],
    skull: ['💀', <></>, 7],
    'woman-tipping-hand': [
      '💁‍♀️',
      <FormattedMessage defaultMessage="Woman tipping hand" id="cSCtnO" />,
      6,
    ],
    'man-tipping-hand': [
      '💁‍♂️',
      <FormattedMessage defaultMessage="Man tipping hand" id="T3XE1y" />,
      6,
    ],
    information_desk_person: ['💁', <></>, 6],
    'female-guard': [
      '💂‍♀️',
      <FormattedMessage defaultMessage="Woman guard" id="0ADpY3" />,
      6,
    ],
    'male-guard': [
      '💂‍♂️',
      <FormattedMessage defaultMessage="Man guard" id="vTS60U" />,
      6,
    ],
    guardsman: ['💂', <></>, 6],
    dancer: ['💃', <></>, 6],
    lipstick: ['💄', <></>, 5],
    nail_care: [
      '💅',
      <FormattedMessage defaultMessage="Nail polish" id="VSQPXW" />,
      6,
    ],
    'woman-getting-massage': [
      '💆‍♀️',
      <FormattedMessage defaultMessage="Woman getting massage" id="tTvgW7" />,
      6,
    ],
    'man-getting-massage': [
      '💆‍♂️',
      <FormattedMessage defaultMessage="Man getting massage" id="IiHP8x" />,
      6,
    ],
    massage: [
      '💆',
      <FormattedMessage defaultMessage="Face massage" id="junzyI" />,
      6,
    ],
    'woman-getting-haircut': [
      '💇‍♀️',
      <FormattedMessage defaultMessage="Woman getting haircut" id="whw2/O" />,
      6,
    ],
    'man-getting-haircut': [
      '💇‍♂️',
      <FormattedMessage defaultMessage="Man getting haircut" id="zdyoIW" />,
      6,
    ],
    haircut: ['💇', <></>, 6],
    barber: [
      '💈',
      <FormattedMessage defaultMessage="Barber pole" id="i8VjEf" />,
      9,
    ],
    syringe: ['💉', <></>, 5],
    pill: ['💊', <></>, 5],
    kiss: [
      '💋',
      <FormattedMessage defaultMessage="Kiss mark" id="O+gJ+1" />,
      7,
    ],
    love_letter: ['💌', <></>, 7],
    ring: ['💍', <></>, 5],
    gem: ['💎', <FormattedMessage defaultMessage="Gem stone" id="8Z9v/D" />, 5],
    couplekiss: [
      '💏',
      <FormattedMessage defaultMessage="Kiss" id="3tZ3zI" />,
      6,
    ],
    bouquet: ['💐', <></>, 1],
    couple_with_heart: ['💑', <></>, 6],
    wedding: ['💒', <></>, 9],
    heartbeat: [
      '💓',
      <FormattedMessage defaultMessage="Beating heart" id="imO4Xl" />,
      7,
    ],
    broken_heart: ['💔', <></>, 7],
    two_hearts: ['💕', <></>, 7],
    sparkling_heart: ['💖', <></>, 7],
    heartpulse: [
      '💗',
      <FormattedMessage defaultMessage="Growing heart" id="7EO+7A" />,
      7,
    ],
    cupid: [
      '💘',
      <FormattedMessage defaultMessage="Heart with arrow" id="w9xAMR" />,
      7,
    ],
    blue_heart: ['💙', <></>, 7],
    green_heart: ['💚', <></>, 7],
    yellow_heart: ['💛', <></>, 7],
    purple_heart: ['💜', <></>, 7],
    gift_heart: [
      '💝',
      <FormattedMessage defaultMessage="Heart with ribbon" id="wNUiCD" />,
      7,
    ],
    revolving_hearts: ['💞', <></>, 7],
    heart_decoration: ['💟', <></>, 7],
    diamond_shape_with_a_dot_inside: ['💠', <></>, 8],
    bulb: [
      '💡',
      <FormattedMessage defaultMessage="Electric light bulb" id="UHa3QH" />,
      5,
    ],
    anger: [
      '💢',
      <FormattedMessage defaultMessage="Anger symbol" id="H6GIfs" />,
      7,
    ],
    bomb: ['💣', <></>, 7],
    zzz: [
      '💤',
      <FormattedMessage defaultMessage="Sleeping symbol" id="5d9tIl" />,
      7,
    ],
    boom: [
      '💥',
      <FormattedMessage defaultMessage="Collision symbol" id="Hafxt4" />,
      7,
    ],
    sweat_drops: [
      '💦',
      <FormattedMessage defaultMessage="Splashing sweat symbol" id="9WC57Q" />,
      7,
    ],
    droplet: ['💧', <></>, 9],
    dash: [
      '💨',
      <FormattedMessage defaultMessage="Dash symbol" id="Yu0fht" />,
      7,
    ],
    hankey: [
      '💩',
      <FormattedMessage defaultMessage="Pile of poo" id="rCkSV5" />,
      7,
    ],
    muscle: [
      '💪',
      <FormattedMessage defaultMessage="Flexed biceps" id="vP4t4z" />,
      6,
    ],
    dizzy: [
      '💫',
      <FormattedMessage defaultMessage="Dizzy symbol" id="Yww/fl" />,
      7,
    ],
    speech_balloon: ['💬', <></>, 7],
    thought_balloon: ['💭', <></>, 7],
    white_flower: ['💮', <></>, 1],
    moneybag: [
      '💰',
      <FormattedMessage defaultMessage="Money bag" id="7u/FEl" />,
      5,
    ],
    currency_exchange: ['💱', <></>, 8],
    heavy_dollar_sign: ['💲', <></>, 8],
    credit_card: ['💳', <></>, 5],
    yen: [
      '💴',
      <FormattedMessage defaultMessage="Banknote with yen sign" id="C37zm+" />,
      5,
    ],
    dollar: [
      '💵',
      <FormattedMessage
        defaultMessage="Banknote with dollar sign"
        id="+m1LCZ"
      />,
      5,
    ],
    euro: [
      '💶',
      <FormattedMessage defaultMessage="Banknote with euro sign" id="lkZs/e" />,
      5,
    ],
    pound: [
      '💷',
      <FormattedMessage
        defaultMessage="Banknote with pound sign"
        id="hkrFpI"
      />,
      5,
    ],
    money_with_wings: ['💸', <></>, 5],
    chart: [
      '💹',
      <FormattedMessage
        defaultMessage="Chart with upwards trend and yen sign"
        id="WP7n/v"
      />,
      5,
    ],
    seat: ['💺', <></>, 9],
    computer: [
      '💻',
      <FormattedMessage defaultMessage="Personal computer" id="e+4BOh" />,
      5,
    ],
    briefcase: ['💼', <></>, 5],
    minidisc: ['💽', <></>, 5],
    floppy_disk: ['💾', <></>, 5],
    cd: [
      '💿',
      <FormattedMessage defaultMessage="Optical disc" id="TeZPPD" />,
      5,
    ],
    dvd: ['📀', <></>, 5],
    file_folder: ['📁', <></>, 5],
    open_file_folder: ['📂', <></>, 5],
    page_with_curl: ['📃', <></>, 5],
    page_facing_up: ['📄', <></>, 5],
    date: ['📅', <FormattedMessage defaultMessage="Calendar" id="Coy6SH" />, 5],
    calendar: [
      '📆',
      <FormattedMessage defaultMessage="Tear-off calendar" id="Fgopp9" />,
      5,
    ],
    card_index: ['📇', <></>, 5],
    chart_with_upwards_trend: ['📈', <></>, 5],
    chart_with_downwards_trend: ['📉', <></>, 5],
    bar_chart: ['📊', <></>, 5],
    clipboard: ['📋', <></>, 5],
    pushpin: ['📌', <></>, 5],
    round_pushpin: ['📍', <></>, 5],
    paperclip: ['📎', <></>, 5],
    straight_ruler: ['📏', <></>, 5],
    triangular_ruler: ['📐', <></>, 5],
    bookmark_tabs: ['📑', <></>, 5],
    ledger: ['📒', <></>, 5],
    notebook: ['📓', <></>, 5],
    notebook_with_decorative_cover: ['📔', <></>, 5],
    closed_book: ['📕', <></>, 5],
    book: [
      '📖',
      <FormattedMessage defaultMessage="Open book" id="i7ka4d" />,
      5,
    ],
    green_book: ['📗', <></>, 5],
    blue_book: ['📘', <></>, 5],
    orange_book: ['📙', <></>, 5],
    books: ['📚', <></>, 5],
    name_badge: ['📛', <></>, 8],
    scroll: ['📜', <></>, 5],
    memo: ['📝', <></>, 5],
    telephone_receiver: ['📞', <></>, 5],
    pager: ['📟', <></>, 5],
    fax: [
      '📠',
      <FormattedMessage defaultMessage="Fax machine" id="8CaVy5" />,
      5,
    ],
    satellite_antenna: ['📡', <></>, 5],
    loudspeaker: [
      '📢',
      <FormattedMessage
        defaultMessage="Public address loudspeaker"
        id="r//+rL"
      />,
      5,
    ],
    mega: [
      '📣',
      <FormattedMessage defaultMessage="Cheering megaphone" id="xaWloe" />,
      5,
    ],
    outbox_tray: ['📤', <></>, 5],
    inbox_tray: ['📥', <></>, 5],
    package: ['📦', <></>, 5],
    'e-mail': [
      '📧',
      <FormattedMessage defaultMessage="E-mail symbol" id="iYyAtS" />,
      5,
    ],
    incoming_envelope: ['📨', <></>, 5],
    envelope_with_arrow: [
      '📩',
      <FormattedMessage
        defaultMessage="Envelope with downwards arrow above"
        id="mxuDOj"
      />,
      5,
    ],
    mailbox_closed: [
      '📪',
      <FormattedMessage
        defaultMessage="Closed mailbox with lowered flag"
        id="wYJYpN"
      />,
      5,
    ],
    mailbox: [
      '📫',
      <FormattedMessage
        defaultMessage="Closed mailbox with raised flag"
        id="/u7fwM"
      />,
      5,
    ],
    mailbox_with_mail: [
      '📬',
      <FormattedMessage
        defaultMessage="Open mailbox with raised flag"
        id="lZWbeJ"
      />,
      5,
    ],
    mailbox_with_no_mail: [
      '📭',
      <FormattedMessage
        defaultMessage="Open mailbox with lowered flag"
        id="yHltgj"
      />,
      5,
    ],
    postbox: ['📮', <></>, 5],
    postal_horn: ['📯', <></>, 5],
    newspaper: ['📰', <></>, 5],
    iphone: [
      '📱',
      <FormattedMessage defaultMessage="Mobile phone" id="xhZV3m" />,
      5,
    ],
    calling: [
      '📲',
      <FormattedMessage
        defaultMessage="Mobile phone with rightwards arrow at left"
        id="+1Ju74"
      />,
      5,
    ],
    vibration_mode: ['📳', <></>, 8],
    mobile_phone_off: ['📴', <></>, 8],
    no_mobile_phones: ['📵', <></>, 8],
    signal_strength: [
      '📶',
      <FormattedMessage defaultMessage="Antenna with bars" id="K3x5dW" />,
      8,
    ],
    camera: ['📷', <></>, 5],
    camera_with_flash: ['📸', <></>, 5],
    video_camera: ['📹', <></>, 5],
    tv: ['📺', <FormattedMessage defaultMessage="Television" id="6LdeyR" />, 5],
    radio: ['📻', <></>, 5],
    vhs: [
      '📼',
      <FormattedMessage defaultMessage="Videocassette" id="soyajh" />,
      5,
    ],
    film_projector: ['📽️', <></>, 5],
    prayer_beads: ['📿', <></>, 5],
    twisted_rightwards_arrows: ['🔀', <></>, 8],
    repeat: [
      '🔁',
      <FormattedMessage
        defaultMessage="Clockwise rightwards and leftwards open circle arrows"
        id="kcyhOX"
      />,
      8,
    ],
    repeat_one: [
      '🔂',
      <FormattedMessage
        defaultMessage="Clockwise rightwards and leftwards open circle arrows with circled one overlay"
        id="MAFcd+"
      />,
      8,
    ],
    arrows_clockwise: [
      '🔃',
      <FormattedMessage
        defaultMessage="Clockwise downwards and upwards open circle arrows"
        id="IdCVGS"
      />,
      8,
    ],
    arrows_counterclockwise: [
      '🔄',
      <FormattedMessage
        defaultMessage="Anticlockwise downwards and upwards open circle arrows"
        id="qsX96q"
      />,
      8,
    ],
    low_brightness: [
      '🔅',
      <FormattedMessage defaultMessage="Low brightness symbol" id="1OXVoF" />,
      8,
    ],
    high_brightness: [
      '🔆',
      <FormattedMessage defaultMessage="High brightness symbol" id="LRig/w" />,
      8,
    ],
    mute: [
      '🔇',
      <FormattedMessage
        defaultMessage="Speaker with cancellation stroke"
        id="OrGA7r"
      />,
      5,
    ],
    speaker: ['🔈', <></>, 5],
    sound: [
      '🔉',
      <FormattedMessage
        defaultMessage="Speaker with one sound wave"
        id="gIOGlk"
      />,
      5,
    ],
    loud_sound: [
      '🔊',
      <FormattedMessage
        defaultMessage="Speaker with three sound waves"
        id="2xabCw"
      />,
      5,
    ],
    battery: ['🔋', <></>, 5],
    electric_plug: ['🔌', <></>, 5],
    mag: [
      '🔍',
      <FormattedMessage
        defaultMessage="Left-pointing magnifying glass"
        id="AP2pfn"
      />,
      5,
    ],
    mag_right: [
      '🔎',
      <FormattedMessage
        defaultMessage="Right-pointing magnifying glass"
        id="ZgnjFf"
      />,
      5,
    ],
    lock_with_ink_pen: ['🔏', <></>, 5],
    closed_lock_with_key: ['🔐', <></>, 5],
    key: ['🔑', <></>, 5],
    lock: ['🔒', <></>, 5],
    unlock: [
      '🔓',
      <FormattedMessage defaultMessage="Open lock" id="9+Gr6X" />,
      5,
    ],
    bell: ['🔔', <></>, 5],
    no_bell: [
      '🔕',
      <FormattedMessage
        defaultMessage="Bell with cancellation stroke"
        id="uABKZp"
      />,
      5,
    ],
    bookmark: ['🔖', <></>, 5],
    link: [
      '🔗',
      <FormattedMessage defaultMessage="Link symbol" id="tVYLV3" />,
      5,
    ],
    radio_button: ['🔘', <></>, 8],
    back: [
      '🔙',
      <FormattedMessage
        defaultMessage="Back with leftwards arrow above"
        id="HIniVP"
      />,
      8,
    ],
    end: [
      '🔚',
      <FormattedMessage
        defaultMessage="End with leftwards arrow above"
        id="KxLMBU"
      />,
      8,
    ],
    on: [
      '🔛',
      <FormattedMessage
        defaultMessage="On with exclamation mark with left right arrow above"
        id="YvNGSY"
      />,
      8,
    ],
    soon: [
      '🔜',
      <FormattedMessage
        defaultMessage="Soon with rightwards arrow above"
        id="TwbUG2"
      />,
      8,
    ],
    top: [
      '🔝',
      <FormattedMessage
        defaultMessage="Top with upwards arrow above"
        id="M1krSY"
      />,
      8,
    ],
    underage: [
      '🔞',
      <FormattedMessage
        defaultMessage="No one under eighteen symbol"
        id="ZyEcdi"
      />,
      8,
    ],
    keycap_ten: ['🔟', <></>, 8],
    capital_abcd: [
      '🔠',
      <FormattedMessage
        defaultMessage="Input symbol for latin capital letters"
        id="iFWt41"
      />,
      8,
    ],
    abcd: [
      '🔡',
      <FormattedMessage
        defaultMessage="Input symbol for latin small letters"
        id="dxXzPU"
      />,
      8,
    ],
    symbols: [
      '🔣',
      <FormattedMessage
        defaultMessage="Input symbol for symbols"
        id="Kux6go"
      />,
      8,
    ],
    abc: [
      '🔤',
      <FormattedMessage
        defaultMessage="Input symbol for latin letters"
        id="s1Syhi"
      />,
      8,
    ],
    fire: ['🔥', <></>, 9],
    flashlight: [
      '🔦',
      <FormattedMessage defaultMessage="Electric torch" id="KyaNhz" />,
      5,
    ],
    wrench: ['🔧', <></>, 5],
    hammer: ['🔨', <></>, 5],
    nut_and_bolt: ['🔩', <></>, 5],
    hocho: ['🔪', <></>, 4],
    gun: ['🔫', <FormattedMessage defaultMessage="Pistol" id="wZqjkP" />, 5],
    microscope: ['🔬', <></>, 5],
    telescope: ['🔭', <></>, 5],
    crystal_ball: ['🔮', <></>, 0],
    six_pointed_star: [
      '🔯',
      <FormattedMessage
        defaultMessage="Six pointed star with middle dot"
        id="nUCnxT"
      />,
      8,
    ],
    beginner: [
      '🔰',
      <FormattedMessage
        defaultMessage="Japanese symbol for beginner"
        id="XDCCdY"
      />,
      8,
    ],
    trident: [
      '🔱',
      <FormattedMessage defaultMessage="Trident emblem" id="byscB0" />,
      8,
    ],
    black_square_button: ['🔲', <></>, 8],
    white_square_button: ['🔳', <></>, 8],
    red_circle: [
      '🔴',
      <FormattedMessage defaultMessage="Large red circle" id="pFiJSc" />,
      8,
    ],
    large_blue_circle: ['🔵', <></>, 8],
    large_orange_diamond: ['🔶', <></>, 8],
    large_blue_diamond: ['🔷', <></>, 8],
    small_orange_diamond: ['🔸', <></>, 8],
    small_blue_diamond: ['🔹', <></>, 8],
    small_red_triangle: [
      '🔺',
      <FormattedMessage
        defaultMessage="Up-pointing red triangle"
        id="J3bvBi"
      />,
      8,
    ],
    small_red_triangle_down: [
      '🔻',
      <FormattedMessage
        defaultMessage="Down-pointing red triangle"
        id="HquMVa"
      />,
      8,
    ],
    arrow_up_small: [
      '🔼',
      <FormattedMessage
        defaultMessage="Up-pointing small red triangle"
        id="Cpsse/"
      />,
      8,
    ],
    arrow_down_small: [
      '🔽',
      <FormattedMessage
        defaultMessage="Down-pointing small red triangle"
        id="4WZdqW"
      />,
      8,
    ],
    om_symbol: ['🕉️', <FormattedMessage defaultMessage="Om" id="suWUnD" />, 8],
    dove_of_peace: [
      '🕊️',
      <FormattedMessage defaultMessage="Dove" id="wXwT/6" />,
      1,
    ],
    kaaba: ['🕋', <></>, 9],
    mosque: ['🕌', <></>, 9],
    synagogue: ['🕍', <></>, 9],
    menorah_with_nine_branches: ['🕎', <></>, 8],
    clock1: [
      '🕐',
      <FormattedMessage defaultMessage="Clock face one oclock" id="or01M7" />,
      9,
    ],
    clock2: [
      '🕑',
      <FormattedMessage defaultMessage="Clock face two oclock" id="t7XAbk" />,
      9,
    ],
    clock3: [
      '🕒',
      <FormattedMessage defaultMessage="Clock face three oclock" id="alUMbX" />,
      9,
    ],
    clock4: [
      '🕓',
      <FormattedMessage defaultMessage="Clock face four oclock" id="ETaqHU" />,
      9,
    ],
    clock5: [
      '🕔',
      <FormattedMessage defaultMessage="Clock face five oclock" id="8z7eT6" />,
      9,
    ],
    clock6: [
      '🕕',
      <FormattedMessage defaultMessage="Clock face six oclock" id="3q4OXS" />,
      9,
    ],
    clock7: [
      '🕖',
      <FormattedMessage defaultMessage="Clock face seven oclock" id="OdAtql" />,
      9,
    ],
    clock8: [
      '🕗',
      <FormattedMessage defaultMessage="Clock face eight oclock" id="5Haf1C" />,
      9,
    ],
    clock9: [
      '🕘',
      <FormattedMessage defaultMessage="Clock face nine oclock" id="uoDCSB" />,
      9,
    ],
    clock10: [
      '🕙',
      <FormattedMessage defaultMessage="Clock face ten oclock" id="pyPSn8" />,
      9,
    ],
    clock11: [
      '🕚',
      <FormattedMessage
        defaultMessage="Clock face eleven oclock"
        id="Y2B0wz"
      />,
      9,
    ],
    clock12: [
      '🕛',
      <FormattedMessage
        defaultMessage="Clock face twelve oclock"
        id="Jn2VFC"
      />,
      9,
    ],
    clock130: [
      '🕜',
      <FormattedMessage defaultMessage="Clock face one-thirty" id="I09R9D" />,
      9,
    ],
    clock230: [
      '🕝',
      <FormattedMessage defaultMessage="Clock face two-thirty" id="ta3q47" />,
      9,
    ],
    clock330: [
      '🕞',
      <FormattedMessage defaultMessage="Clock face three-thirty" id="92jotb" />,
      9,
    ],
    clock430: [
      '🕟',
      <FormattedMessage defaultMessage="Clock face four-thirty" id="kv5T+I" />,
      9,
    ],
    clock530: [
      '🕠',
      <FormattedMessage defaultMessage="Clock face five-thirty" id="xH2QwD" />,
      9,
    ],
    clock630: [
      '🕡',
      <FormattedMessage defaultMessage="Clock face six-thirty" id="uTLRmC" />,
      9,
    ],
    clock730: [
      '🕢',
      <FormattedMessage defaultMessage="Clock face seven-thirty" id="moUUpJ" />,
      9,
    ],
    clock830: [
      '🕣',
      <FormattedMessage defaultMessage="Clock face eight-thirty" id="FkuPGC" />,
      9,
    ],
    clock930: [
      '🕤',
      <FormattedMessage defaultMessage="Clock face nine-thirty" id="ZAaRT+" />,
      9,
    ],
    clock1030: [
      '🕥',
      <FormattedMessage defaultMessage="Clock face ten-thirty" id="GIEAE5" />,
      9,
    ],
    clock1130: [
      '🕦',
      <FormattedMessage
        defaultMessage="Clock face eleven-thirty"
        id="dKw9Xm"
      />,
      9,
    ],
    clock1230: [
      '🕧',
      <FormattedMessage
        defaultMessage="Clock face twelve-thirty"
        id="tEQ8SE"
      />,
      9,
    ],
    candle: ['🕯️', <></>, 5],
    mantelpiece_clock: ['🕰️', <></>, 9],
    hole: ['🕳️', <></>, 7],
    man_in_business_suit_levitating: [
      '🕴️',
      <FormattedMessage
        defaultMessage="Person in suit levitating"
        id="6NPALS"
      />,
      6,
    ],
    'female-detective': [
      '🕵️‍♀️',
      <FormattedMessage defaultMessage="Woman detective" id="7dqtJT" />,
      6,
    ],
    'male-detective': [
      '🕵️‍♂️',
      <FormattedMessage defaultMessage="Man detective" id="8pkn4v" />,
      6,
    ],
    sleuth_or_spy: [
      '🕵️',
      <FormattedMessage defaultMessage="Detective" id="M8AqzS" />,
      6,
    ],
    dark_sunglasses: [
      '🕶️',
      <FormattedMessage defaultMessage="Sunglasses" id="XcUwOJ" />,
      5,
    ],
    spider: ['🕷️', <></>, 1],
    spider_web: ['🕸️', <></>, 1],
    joystick: ['🕹️', <></>, 0],
    man_dancing: ['🕺', <></>, 6],
    linked_paperclips: ['🖇️', <></>, 5],
    lower_left_ballpoint_pen: [
      '🖊️',
      <FormattedMessage defaultMessage="Pen" id="3ODqMY" />,
      5,
    ],
    lower_left_fountain_pen: [
      '🖋️',
      <FormattedMessage defaultMessage="Fountain pen" id="lV5V+7" />,
      5,
    ],
    lower_left_paintbrush: [
      '🖌️',
      <FormattedMessage defaultMessage="Paintbrush" id="DINGOM" />,
      5,
    ],
    lower_left_crayon: [
      '🖍️',
      <FormattedMessage defaultMessage="Crayon" id="dweFsF" />,
      5,
    ],
    raised_hand_with_fingers_splayed: [
      '🖐️',
      <FormattedMessage
        defaultMessage="Hand with fingers splayed"
        id="avgN6X"
      />,
      6,
    ],
    middle_finger: [
      '🖕',
      <FormattedMessage
        defaultMessage="Reversed hand with middle finger extended"
        id="k0MJa+"
      />,
      6,
    ],
    'spock-hand': [
      '🖖',
      <FormattedMessage
        defaultMessage="Raised hand with part between middle and ring fingers"
        id="IDMOVe"
      />,
      6,
    ],
    black_heart: ['🖤', <></>, 7],
    desktop_computer: ['🖥️', <></>, 5],
    printer: ['🖨️', <></>, 5],
    three_button_mouse: [
      '🖱️',
      <FormattedMessage defaultMessage="Computer mouse" id="KYxi7p" />,
      5,
    ],
    trackball: ['🖲️', <></>, 5],
    frame_with_picture: [
      '🖼️',
      <FormattedMessage defaultMessage="Framed picture" id="iC3oSi" />,
      0,
    ],
    card_index_dividers: ['🗂️', <></>, 5],
    card_file_box: ['🗃️', <></>, 5],
    file_cabinet: ['🗄️', <></>, 5],
    wastebasket: ['🗑️', <></>, 5],
    spiral_note_pad: [
      '🗒️',
      <FormattedMessage defaultMessage="Spiral notepad" id="wzxao6" />,
      5,
    ],
    spiral_calendar_pad: [
      '🗓️',
      <FormattedMessage defaultMessage="Spiral calendar" id="om9FtK" />,
      5,
    ],
    compression: [
      '🗜️',
      <FormattedMessage defaultMessage="Clamp" id="ByUDx8" />,
      5,
    ],
    old_key: ['🗝️', <></>, 5],
    rolled_up_newspaper: [
      '🗞️',
      <FormattedMessage defaultMessage="Rolled-up newspaper" id="O0c2n3" />,
      5,
    ],
    dagger_knife: [
      '🗡️',
      <FormattedMessage defaultMessage="Dagger" id="b2JzAl" />,
      5,
    ],
    speaking_head_in_silhouette: [
      '🗣️',
      <FormattedMessage defaultMessage="Speaking head" id="PdzFPy" />,
      6,
    ],
    left_speech_bubble: ['🗨️', <></>, 7],
    right_anger_bubble: ['🗯️', <></>, 7],
    ballot_box_with_ballot: ['🗳️', <></>, 5],
    world_map: ['🗺️', <></>, 9],
    mount_fuji: ['🗻', <></>, 9],
    tokyo_tower: ['🗼', <></>, 9],
    statue_of_liberty: ['🗽', <></>, 9],
    japan: [
      '🗾',
      <FormattedMessage defaultMessage="Silhouette of japan" id="u7Ukzv" />,
      9,
    ],
    moyai: ['🗿', <></>, 5],
    grinning: [
      '😀',
      <FormattedMessage defaultMessage="Grinning face" id="1VDgWC" />,
      7,
    ],
    grin: [
      '😁',
      <FormattedMessage
        defaultMessage="Grinning face with smiling eyes"
        id="h8DZfp"
      />,
      7,
    ],
    joy: [
      '😂',
      <FormattedMessage defaultMessage="Face with tears of joy" id="6EENGF" />,
      7,
    ],
    smiley: [
      '😃',
      <FormattedMessage
        defaultMessage="Smiling face with open mouth"
        id="MuDzNv"
      />,
      7,
    ],
    smile: [
      '😄',
      <FormattedMessage
        defaultMessage="Smiling face with open mouth and smiling eyes"
        id="jHUKmZ"
      />,
      7,
    ],
    sweat_smile: [
      '😅',
      <FormattedMessage
        defaultMessage="Smiling face with open mouth and cold sweat"
        id="bnCSu/"
      />,
      7,
    ],
    laughing: [
      '😆',
      <FormattedMessage
        defaultMessage="Smiling face with open mouth and tightly-closed eyes"
        id="EzgF/Q"
      />,
      7,
    ],
    innocent: [
      '😇',
      <FormattedMessage defaultMessage="Smiling face with halo" id="kGVBf0" />,
      7,
    ],
    smiling_imp: [
      '😈',
      <FormattedMessage defaultMessage="Smiling face with horns" id="cZa62c" />,
      7,
    ],
    wink: [
      '😉',
      <FormattedMessage defaultMessage="Winking face" id="7FTN0o" />,
      7,
    ],
    blush: [
      '😊',
      <FormattedMessage
        defaultMessage="Smiling face with smiling eyes"
        id="sV35T3"
      />,
      7,
    ],
    yum: [
      '😋',
      <FormattedMessage
        defaultMessage="Face savouring delicious food"
        id="VPeuKa"
      />,
      7,
    ],
    relieved: [
      '😌',
      <FormattedMessage defaultMessage="Relieved face" id="K7CURc" />,
      7,
    ],
    heart_eyes: [
      '😍',
      <FormattedMessage
        defaultMessage="Smiling face with heart-shaped eyes"
        id="A5cazn"
      />,
      7,
    ],
    sunglasses: [
      '😎',
      <FormattedMessage
        defaultMessage="Smiling face with sunglasses"
        id="Yf4TZl"
      />,
      7,
    ],
    smirk: [
      '😏',
      <FormattedMessage defaultMessage="Smirking face" id="LVgrhl" />,
      7,
    ],
    neutral_face: ['😐', <></>, 7],
    expressionless: [
      '😑',
      <FormattedMessage defaultMessage="Expressionless face" id="A2aw2T" />,
      7,
    ],
    unamused: [
      '😒',
      <FormattedMessage defaultMessage="Unamused face" id="N+xKzW" />,
      7,
    ],
    sweat: [
      '😓',
      <FormattedMessage defaultMessage="Face with cold sweat" id="tHja+5" />,
      7,
    ],
    pensive: [
      '😔',
      <FormattedMessage defaultMessage="Pensive face" id="G+kaSy" />,
      7,
    ],
    confused: [
      '😕',
      <FormattedMessage defaultMessage="Confused face" id="kW4ZFe" />,
      7,
    ],
    confounded: [
      '😖',
      <FormattedMessage defaultMessage="Confounded face" id="GpsNYG" />,
      7,
    ],
    kissing: [
      '😗',
      <FormattedMessage defaultMessage="Kissing face" id="jeqbxw" />,
      7,
    ],
    kissing_heart: [
      '😘',
      <FormattedMessage defaultMessage="Face throwing a kiss" id="dX++Op" />,
      7,
    ],
    kissing_smiling_eyes: [
      '😙',
      <FormattedMessage
        defaultMessage="Kissing face with smiling eyes"
        id="coacQZ"
      />,
      7,
    ],
    kissing_closed_eyes: [
      '😚',
      <FormattedMessage
        defaultMessage="Kissing face with closed eyes"
        id="XKV6Hh"
      />,
      7,
    ],
    stuck_out_tongue: [
      '😛',
      <FormattedMessage
        defaultMessage="Face with stuck-out tongue"
        id="woJKn5"
      />,
      7,
    ],
    stuck_out_tongue_winking_eye: [
      '😜',
      <FormattedMessage
        defaultMessage="Face with stuck-out tongue and winking eye"
        id="QkUU+d"
      />,
      7,
    ],
    stuck_out_tongue_closed_eyes: [
      '😝',
      <FormattedMessage
        defaultMessage="Face with stuck-out tongue and tightly-closed eyes"
        id="ac71GM"
      />,
      7,
    ],
    disappointed: [
      '😞',
      <FormattedMessage defaultMessage="Disappointed face" id="MHZx8G" />,
      7,
    ],
    worried: [
      '😟',
      <FormattedMessage defaultMessage="Worried face" id="bwjuF5" />,
      7,
    ],
    angry: [
      '😠',
      <FormattedMessage defaultMessage="Angry face" id="Nl8Mia" />,
      7,
    ],
    rage: [
      '😡',
      <FormattedMessage defaultMessage="Pouting face" id="oB4bR6" />,
      7,
    ],
    cry: [
      '😢',
      <FormattedMessage defaultMessage="Crying face" id="Id9wUe" />,
      7,
    ],
    persevere: [
      '😣',
      <FormattedMessage defaultMessage="Persevering face" id="8za/UC" />,
      7,
    ],
    triumph: [
      '😤',
      <FormattedMessage
        defaultMessage="Face with look of triumph"
        id="KUNRYN"
      />,
      7,
    ],
    disappointed_relieved: [
      '😥',
      <FormattedMessage
        defaultMessage="Disappointed but relieved face"
        id="1gvpq+"
      />,
      7,
    ],
    frowning: [
      '😦',
      <FormattedMessage
        defaultMessage="Frowning face with open mouth"
        id="BppM8I"
      />,
      7,
    ],
    anguished: [
      '😧',
      <FormattedMessage defaultMessage="Anguished face" id="f1v+M7" />,
      7,
    ],
    fearful: [
      '😨',
      <FormattedMessage defaultMessage="Fearful face" id="dCaSfo" />,
      7,
    ],
    weary: [
      '😩',
      <FormattedMessage defaultMessage="Weary face" id="jeOc8u" />,
      7,
    ],
    sleepy: [
      '😪',
      <FormattedMessage defaultMessage="Sleepy face" id="cu9oai" />,
      7,
    ],
    tired_face: ['😫', <></>, 7],
    grimacing: [
      '😬',
      <FormattedMessage defaultMessage="Grimacing face" id="bqOGJp" />,
      7,
    ],
    sob: [
      '😭',
      <FormattedMessage defaultMessage="Loudly crying face" id="iMN+ZT" />,
      7,
    ],
    face_exhaling: ['😮‍💨', <></>, 7],
    open_mouth: [
      '😮',
      <FormattedMessage defaultMessage="Face with open mouth" id="h7vXSL" />,
      7,
    ],
    hushed: [
      '😯',
      <FormattedMessage defaultMessage="Hushed face" id="+U9tGz" />,
      7,
    ],
    cold_sweat: [
      '😰',
      <FormattedMessage
        defaultMessage="Face with open mouth and cold sweat"
        id="knz2ql"
      />,
      7,
    ],
    scream: [
      '😱',
      <FormattedMessage defaultMessage="Face screaming in fear" id="Ny2f0I" />,
      7,
    ],
    astonished: [
      '😲',
      <FormattedMessage defaultMessage="Astonished face" id="sHkvOM" />,
      7,
    ],
    flushed: [
      '😳',
      <FormattedMessage defaultMessage="Flushed face" id="I4MXyP" />,
      7,
    ],
    sleeping: [
      '😴',
      <FormattedMessage defaultMessage="Sleeping face" id="F4+RWo" />,
      7,
    ],
    face_with_spiral_eyes: ['😵‍💫', <></>, 7],
    dizzy_face: ['😵', <></>, 7],
    face_in_clouds: ['😶‍🌫️', <></>, 7],
    no_mouth: [
      '😶',
      <FormattedMessage defaultMessage="Face without mouth" id="mHNn/M" />,
      7,
    ],
    mask: [
      '😷',
      <FormattedMessage defaultMessage="Face with medical mask" id="EHY24h" />,
      7,
    ],
    smile_cat: [
      '😸',
      <FormattedMessage
        defaultMessage="Grinning cat face with smiling eyes"
        id="N/3R4h"
      />,
      7,
    ],
    joy_cat: [
      '😹',
      <FormattedMessage
        defaultMessage="Cat face with tears of joy"
        id="up97he"
      />,
      7,
    ],
    smiley_cat: [
      '😺',
      <FormattedMessage
        defaultMessage="Smiling cat face with open mouth"
        id="USnPjq"
      />,
      7,
    ],
    heart_eyes_cat: [
      '😻',
      <FormattedMessage
        defaultMessage="Smiling cat face with heart-shaped eyes"
        id="TEqhYm"
      />,
      7,
    ],
    smirk_cat: [
      '😼',
      <FormattedMessage defaultMessage="Cat face with wry smile" id="APjVx5" />,
      7,
    ],
    kissing_cat: [
      '😽',
      <FormattedMessage
        defaultMessage="Kissing cat face with closed eyes"
        id="UxpCpH"
      />,
      7,
    ],
    pouting_cat: [
      '😾',
      <FormattedMessage defaultMessage="Pouting cat face" id="vOKhSj" />,
      7,
    ],
    crying_cat_face: ['😿', <></>, 7],
    scream_cat: [
      '🙀',
      <FormattedMessage defaultMessage="Weary cat face" id="Gavr3u" />,
      7,
    ],
    slightly_frowning_face: ['🙁', <></>, 7],
    slightly_smiling_face: ['🙂', <></>, 7],
    upside_down_face: [
      '🙃',
      <FormattedMessage defaultMessage="Upside-down face" id="qhpC34" />,
      7,
    ],
    face_with_rolling_eyes: ['🙄', <></>, 7],
    'woman-gesturing-no': [
      '🙅‍♀️',
      <FormattedMessage defaultMessage="Woman gesturing no" id="0KV/qt" />,
      6,
    ],
    'man-gesturing-no': [
      '🙅‍♂️',
      <FormattedMessage defaultMessage="Man gesturing no" id="YIOSkf" />,
      6,
    ],
    no_good: [
      '🙅',
      <FormattedMessage
        defaultMessage="Face with no good gesture"
        id="CErYJv"
      />,
      6,
    ],
    'woman-gesturing-ok': [
      '🙆‍♀️',
      <FormattedMessage defaultMessage="Woman gesturing ok" id="mHpJ1n" />,
      6,
    ],
    'man-gesturing-ok': [
      '🙆‍♂️',
      <FormattedMessage defaultMessage="Man gesturing ok" id="VUY/XT" />,
      6,
    ],
    ok_woman: [
      '🙆',
      <FormattedMessage defaultMessage="Face with ok gesture" id="xVok+E" />,
      6,
    ],
    'woman-bowing': [
      '🙇‍♀️',
      <FormattedMessage defaultMessage="Woman bowing" id="lSXqlg" />,
      6,
    ],
    'man-bowing': [
      '🙇‍♂️',
      <FormattedMessage defaultMessage="Man bowing" id="xVb8/8" />,
      6,
    ],
    bow: [
      '🙇',
      <FormattedMessage defaultMessage="Person bowing deeply" id="wyVZqf" />,
      6,
    ],
    see_no_evil: [
      '🙈',
      <FormattedMessage defaultMessage="See-no-evil monkey" id="F8l3DX" />,
      7,
    ],
    hear_no_evil: [
      '🙉',
      <FormattedMessage defaultMessage="Hear-no-evil monkey" id="mln7dk" />,
      7,
    ],
    speak_no_evil: [
      '🙊',
      <FormattedMessage defaultMessage="Speak-no-evil monkey" id="7w+CMZ" />,
      7,
    ],
    'woman-raising-hand': [
      '🙋‍♀️',
      <FormattedMessage defaultMessage="Woman raising hand" id="ycEQBd" />,
      6,
    ],
    'man-raising-hand': [
      '🙋‍♂️',
      <FormattedMessage defaultMessage="Man raising hand" id="NbKj2d" />,
      6,
    ],
    raising_hand: [
      '🙋',
      <FormattedMessage
        defaultMessage="Happy person raising one hand"
        id="YQ/sON"
      />,
      6,
    ],
    raised_hands: [
      '🙌',
      <FormattedMessage
        defaultMessage="Person raising both hands in celebration"
        id="40Uq3n"
      />,
      6,
    ],
    'woman-frowning': [
      '🙍‍♀️',
      <FormattedMessage defaultMessage="Woman frowning" id="8Uji2N" />,
      6,
    ],
    'man-frowning': [
      '🙍‍♂️',
      <FormattedMessage defaultMessage="Man frowning" id="bP+NP9" />,
      6,
    ],
    person_frowning: ['🙍', <></>, 6],
    'woman-pouting': [
      '🙎‍♀️',
      <FormattedMessage defaultMessage="Woman pouting" id="A6YJEZ" />,
      6,
    ],
    'man-pouting': [
      '🙎‍♂️',
      <FormattedMessage defaultMessage="Man pouting" id="zWI97+" />,
      6,
    ],
    person_with_pouting_face: ['🙎', <></>, 6],
    pray: [
      '🙏',
      <FormattedMessage
        defaultMessage="Person with folded hands"
        id="w3S5ue"
      />,
      6,
    ],
    rocket: ['🚀', <></>, 9],
    helicopter: ['🚁', <></>, 9],
    steam_locomotive: ['🚂', <></>, 9],
    railway_car: ['🚃', <></>, 9],
    bullettrain_side: [
      '🚄',
      <FormattedMessage defaultMessage="High-speed train" id="LPgT05" />,
      9,
    ],
    bullettrain_front: [
      '🚅',
      <FormattedMessage
        defaultMessage="High-speed train with bullet nose"
        id="mBZXbO"
      />,
      9,
    ],
    train2: ['🚆', <FormattedMessage defaultMessage="Train" id="113tiW" />, 9],
    metro: ['🚇', <></>, 9],
    light_rail: ['🚈', <></>, 9],
    station: ['🚉', <></>, 9],
    tram: ['🚊', <></>, 9],
    train: [
      '🚋',
      <FormattedMessage defaultMessage="Tram car" id="olIFZl" />,
      9,
    ],
    bus: ['🚌', <></>, 9],
    oncoming_bus: ['🚍', <></>, 9],
    trolleybus: ['🚎', <></>, 9],
    busstop: [
      '🚏',
      <FormattedMessage defaultMessage="Bus stop" id="5CXbzs" />,
      9,
    ],
    minibus: ['🚐', <></>, 9],
    ambulance: ['🚑', <></>, 9],
    fire_engine: ['🚒', <></>, 9],
    police_car: ['🚓', <></>, 9],
    oncoming_police_car: ['🚔', <></>, 9],
    taxi: ['🚕', <></>, 9],
    oncoming_taxi: ['🚖', <></>, 9],
    car: [
      '🚗',
      <FormattedMessage defaultMessage="Automobile" id="v3DKFv" />,
      9,
    ],
    oncoming_automobile: ['🚘', <></>, 9],
    blue_car: [
      '🚙',
      <FormattedMessage defaultMessage="Recreational vehicle" id="xEZ5uj" />,
      9,
    ],
    truck: [
      '🚚',
      <FormattedMessage defaultMessage="Delivery truck" id="6Q4KI2" />,
      9,
    ],
    articulated_lorry: ['🚛', <></>, 9],
    tractor: ['🚜', <></>, 9],
    monorail: ['🚝', <></>, 9],
    mountain_railway: ['🚞', <></>, 9],
    suspension_railway: ['🚟', <></>, 9],
    mountain_cableway: ['🚠', <></>, 9],
    aerial_tramway: ['🚡', <></>, 9],
    ship: ['🚢', <></>, 9],
    'woman-rowing-boat': [
      '🚣‍♀️',
      <FormattedMessage defaultMessage="Woman rowing boat" id="2VdQ+o" />,
      6,
    ],
    'man-rowing-boat': [
      '🚣‍♂️',
      <FormattedMessage defaultMessage="Man rowing boat" id="i6461Y" />,
      6,
    ],
    rowboat: ['🚣', <></>, 6],
    speedboat: ['🚤', <></>, 9],
    traffic_light: [
      '🚥',
      <FormattedMessage
        defaultMessage="Horizontal traffic light"
        id="mH3RG2"
      />,
      9,
    ],
    vertical_traffic_light: ['🚦', <></>, 9],
    construction: [
      '🚧',
      <FormattedMessage defaultMessage="Construction sign" id="qKQrI4" />,
      9,
    ],
    rotating_light: [
      '🚨',
      <FormattedMessage
        defaultMessage="Police cars revolving light"
        id="/EhN0s"
      />,
      9,
    ],
    triangular_flag_on_post: ['🚩', <></>, 3],
    door: ['🚪', <></>, 5],
    no_entry_sign: ['🚫', <></>, 8],
    smoking: [
      '🚬',
      <FormattedMessage defaultMessage="Smoking symbol" id="Psc2I9" />,
      5,
    ],
    no_smoking: [
      '🚭',
      <FormattedMessage defaultMessage="No smoking symbol" id="86H7l+" />,
      8,
    ],
    put_litter_in_its_place: [
      '🚮',
      <FormattedMessage
        defaultMessage="Put litter in its place symbol"
        id="XnvfOY"
      />,
      8,
    ],
    do_not_litter: [
      '🚯',
      <FormattedMessage defaultMessage="Do not litter symbol" id="2RrwKa" />,
      8,
    ],
    potable_water: [
      '🚰',
      <FormattedMessage defaultMessage="Potable water symbol" id="3yIfx+" />,
      8,
    ],
    'non-potable_water': [
      '🚱',
      <FormattedMessage
        defaultMessage="Non-potable water symbol"
        id="Gvv3ss"
      />,
      8,
    ],
    bike: ['🚲', <FormattedMessage defaultMessage="Bicycle" id="24+VRB" />, 9],
    no_bicycles: ['🚳', <></>, 8],
    'woman-biking': [
      '🚴‍♀️',
      <FormattedMessage defaultMessage="Woman biking" id="kkx7kR" />,
      6,
    ],
    'man-biking': [
      '🚴‍♂️',
      <FormattedMessage defaultMessage="Man biking" id="Uaiuz/" />,
      6,
    ],
    bicyclist: ['🚴', <></>, 6],
    'woman-mountain-biking': [
      '🚵‍♀️',
      <FormattedMessage defaultMessage="Woman mountain biking" id="lV1D7V" />,
      6,
    ],
    'man-mountain-biking': [
      '🚵‍♂️',
      <FormattedMessage defaultMessage="Man mountain biking" id="tF1ITY" />,
      6,
    ],
    mountain_bicyclist: ['🚵', <></>, 6],
    'woman-walking': [
      '🚶‍♀️',
      <FormattedMessage defaultMessage="Woman walking" id="H8eVQb" />,
      6,
    ],
    'man-walking': [
      '🚶‍♂️',
      <FormattedMessage defaultMessage="Man walking" id="ppLdUz" />,
      6,
    ],
    walking: [
      '🚶',
      <FormattedMessage defaultMessage="Pedestrian" id="YxXFeq" />,
      6,
    ],
    no_pedestrians: ['🚷', <></>, 8],
    children_crossing: ['🚸', <></>, 8],
    mens: [
      '🚹',
      <FormattedMessage defaultMessage="Mens symbol" id="z1Z7mG" />,
      8,
    ],
    womens: [
      '🚺',
      <FormattedMessage defaultMessage="Womens symbol" id="mSRDso" />,
      8,
    ],
    restroom: ['🚻', <></>, 8],
    baby_symbol: ['🚼', <></>, 8],
    toilet: ['🚽', <></>, 5],
    wc: [
      '🚾',
      <FormattedMessage defaultMessage="Water closet" id="Rln24g" />,
      8,
    ],
    shower: ['🚿', <></>, 5],
    bath: ['🛀', <></>, 6],
    bathtub: ['🛁', <></>, 5],
    passport_control: ['🛂', <></>, 8],
    customs: ['🛃', <></>, 8],
    baggage_claim: ['🛄', <></>, 8],
    left_luggage: ['🛅', <></>, 8],
    couch_and_lamp: ['🛋️', <></>, 5],
    sleeping_accommodation: ['🛌', <></>, 6],
    shopping_bags: ['🛍️', <></>, 5],
    bellhop_bell: ['🛎️', <></>, 9],
    bed: ['🛏️', <></>, 5],
    place_of_worship: ['🛐', <></>, 8],
    octagonal_sign: ['🛑', <></>, 9],
    shopping_trolley: ['🛒', <></>, 5],
    hindu_temple: ['🛕', <></>, 9],
    hut: ['🛖', <></>, 9],
    elevator: ['🛗', <></>, 5],
    hammer_and_wrench: ['🛠️', <></>, 5],
    shield: ['🛡️', <></>, 5],
    oil_drum: ['🛢️', <></>, 9],
    motorway: ['🛣️', <></>, 9],
    railway_track: ['🛤️', <></>, 9],
    motor_boat: ['🛥️', <></>, 9],
    small_airplane: ['🛩️', <></>, 9],
    airplane_departure: ['🛫', <></>, 9],
    airplane_arriving: ['🛬', <></>, 9],
    satellite: ['🛰️', <></>, 9],
    passenger_ship: ['🛳️', <></>, 9],
    scooter: ['🛴', <></>, 9],
    motor_scooter: ['🛵', <></>, 9],
    canoe: ['🛶', <></>, 9],
    sled: ['🛷', <></>, 0],
    flying_saucer: ['🛸', <></>, 9],
    skateboard: ['🛹', <></>, 9],
    auto_rickshaw: ['🛺', <></>, 9],
    pickup_truck: ['🛻', <></>, 9],
    roller_skate: ['🛼', <></>, 9],
    large_orange_circle: ['🟠', <></>, 8],
    large_yellow_circle: ['🟡', <></>, 8],
    large_green_circle: ['🟢', <></>, 8],
    large_purple_circle: ['🟣', <></>, 8],
    large_brown_circle: ['🟤', <></>, 8],
    large_red_square: ['🟥', <></>, 8],
    large_blue_square: ['🟦', <></>, 8],
    large_orange_square: ['🟧', <></>, 8],
    large_yellow_square: ['🟨', <></>, 8],
    large_green_square: ['🟩', <></>, 8],
    large_purple_square: ['🟪', <></>, 8],
    large_brown_square: ['🟫', <></>, 8],
    pinched_fingers: ['🤌', <></>, 6],
    white_heart: ['🤍', <></>, 7],
    brown_heart: ['🤎', <></>, 7],
    pinching_hand: ['🤏', <></>, 6],
    zipper_mouth_face: [
      '🤐',
      <FormattedMessage defaultMessage="Zipper-mouth face" id="w0D7vF" />,
      7,
    ],
    money_mouth_face: [
      '🤑',
      <FormattedMessage defaultMessage="Money-mouth face" id="qEynTC" />,
      7,
    ],
    face_with_thermometer: ['🤒', <></>, 7],
    nerd_face: ['🤓', <></>, 7],
    thinking_face: ['🤔', <></>, 7],
    face_with_head_bandage: [
      '🤕',
      <FormattedMessage defaultMessage="Face with head-bandage" id="xc2Ujr" />,
      7,
    ],
    robot_face: ['🤖', <></>, 7],
    hugging_face: ['🤗', <></>, 7],
    the_horns: [
      '🤘',
      <FormattedMessage defaultMessage="Sign of the horns" id="c1l7cJ" />,
      6,
    ],
    call_me_hand: ['🤙', <></>, 6],
    raised_back_of_hand: ['🤚', <></>, 6],
    'left-facing_fist': ['🤛', <></>, 6],
    'right-facing_fist': ['🤜', <></>, 6],
    handshake: ['🤝', <></>, 6],
    crossed_fingers: [
      '🤞',
      <FormattedMessage
        defaultMessage="Hand with index and middle fingers crossed"
        id="EdIWBO"
      />,
      6,
    ],
    i_love_you_hand_sign: ['🤟', <></>, 6],
    face_with_cowboy_hat: ['🤠', <></>, 7],
    clown_face: ['🤡', <></>, 7],
    nauseated_face: ['🤢', <></>, 7],
    rolling_on_the_floor_laughing: ['🤣', <></>, 7],
    drooling_face: ['🤤', <></>, 7],
    lying_face: ['🤥', <></>, 7],
    'woman-facepalming': [
      '🤦‍♀️',
      <FormattedMessage defaultMessage="Woman facepalming" id="PuK2Iz" />,
      6,
    ],
    'man-facepalming': [
      '🤦‍♂️',
      <FormattedMessage defaultMessage="Man facepalming" id="J/S0It" />,
      6,
    ],
    face_palm: ['🤦', <></>, 6],
    sneezing_face: ['🤧', <></>, 7],
    face_with_raised_eyebrow: [
      '🤨',
      <FormattedMessage
        defaultMessage="Face with one eyebrow raised"
        id="yoeshG"
      />,
      7,
    ],
    'star-struck': [
      '🤩',
      <FormattedMessage
        defaultMessage="Grinning face with star eyes"
        id="njDcNW"
      />,
      7,
    ],
    zany_face: [
      '🤪',
      <FormattedMessage
        defaultMessage="Grinning face with one large and one small eye"
        id="Tcv8Cg"
      />,
      7,
    ],
    shushing_face: [
      '🤫',
      <FormattedMessage
        defaultMessage="Face with finger covering closed lips"
        id="7MPduC"
      />,
      7,
    ],
    face_with_symbols_on_mouth: [
      '🤬',
      <FormattedMessage
        defaultMessage="Serious face with symbols covering mouth"
        id="8PSoex"
      />,
      7,
    ],
    face_with_hand_over_mouth: [
      '🤭',
      <FormattedMessage
        defaultMessage="Smiling face with smiling eyes and hand covering mouth"
        id="ltVlJP"
      />,
      7,
    ],
    face_vomiting: [
      '🤮',
      <FormattedMessage
        defaultMessage="Face with open mouth vomiting"
        id="A5sAV0"
      />,
      7,
    ],
    exploding_head: [
      '🤯',
      <FormattedMessage
        defaultMessage="Shocked face with exploding head"
        id="bGjlKK"
      />,
      7,
    ],
    pregnant_woman: ['🤰', <></>, 6],
    'breast-feeding': ['🤱', <></>, 6],
    palms_up_together: ['🤲', <></>, 6],
    selfie: ['🤳', <></>, 6],
    prince: ['🤴', <></>, 6],
    woman_in_tuxedo: ['🤵‍♀️', <></>, 6],
    man_in_tuxedo: ['🤵‍♂️', <></>, 6],
    person_in_tuxedo: [
      '🤵',
      <FormattedMessage defaultMessage="Man in tuxedo" id="BarO2L" />,
      6,
    ],
    mrs_claus: [
      '🤶',
      <FormattedMessage defaultMessage="Mother christmas" id="FaBKcF" />,
      6,
    ],
    'woman-shrugging': [
      '🤷‍♀️',
      <FormattedMessage defaultMessage="Woman shrugging" id="F0TWnd" />,
      6,
    ],
    'man-shrugging': [
      '🤷‍♂️',
      <FormattedMessage defaultMessage="Man shrugging" id="nNxmrS" />,
      6,
    ],
    shrug: ['🤷', <></>, 6],
    'woman-cartwheeling': [
      '🤸‍♀️',
      <FormattedMessage defaultMessage="Woman cartwheeling" id="LXKOCt" />,
      6,
    ],
    'man-cartwheeling': [
      '🤸‍♂️',
      <FormattedMessage defaultMessage="Man cartwheeling" id="iXyJxe" />,
      6,
    ],
    person_doing_cartwheel: ['🤸', <></>, 6],
    'woman-juggling': [
      '🤹‍♀️',
      <FormattedMessage defaultMessage="Woman juggling" id="ywlhmo" />,
      6,
    ],
    'man-juggling': [
      '🤹‍♂️',
      <FormattedMessage defaultMessage="Man juggling" id="2LzWYX" />,
      6,
    ],
    juggling: ['🤹', <></>, 6],
    fencer: ['🤺', <></>, 6],
    'woman-wrestling': [
      '🤼‍♀️',
      <FormattedMessage defaultMessage="Women wrestling" id="j6Oogm" />,
      6,
    ],
    'man-wrestling': [
      '🤼‍♂️',
      <FormattedMessage defaultMessage="Men wrestling" id="xT2Hjd" />,
      6,
    ],
    wrestlers: ['🤼', <></>, 6],
    'woman-playing-water-polo': [
      '🤽‍♀️',
      <FormattedMessage
        defaultMessage="Woman playing water polo"
        id="HP5uMm"
      />,
      6,
    ],
    'man-playing-water-polo': [
      '🤽‍♂️',
      <FormattedMessage defaultMessage="Man playing water polo" id="pOJ0ne" />,
      6,
    ],
    water_polo: ['🤽', <></>, 6],
    'woman-playing-handball': [
      '🤾‍♀️',
      <FormattedMessage defaultMessage="Woman playing handball" id="igdZDg" />,
      6,
    ],
    'man-playing-handball': [
      '🤾‍♂️',
      <FormattedMessage defaultMessage="Man playing handball" id="l8w7W8" />,
      6,
    ],
    handball: ['🤾', <></>, 6],
    diving_mask: ['🤿', <></>, 0],
    wilted_flower: ['🥀', <></>, 1],
    drum_with_drumsticks: ['🥁', <></>, 5],
    clinking_glasses: ['🥂', <></>, 4],
    tumbler_glass: ['🥃', <></>, 4],
    spoon: ['🥄', <></>, 4],
    goal_net: ['🥅', <></>, 0],
    first_place_medal: ['🥇', <></>, 0],
    second_place_medal: ['🥈', <></>, 0],
    third_place_medal: ['🥉', <></>, 0],
    boxing_glove: ['🥊', <></>, 0],
    martial_arts_uniform: ['🥋', <></>, 0],
    curling_stone: ['🥌', <></>, 0],
    lacrosse: [
      '🥍',
      <FormattedMessage defaultMessage="Lacrosse stick and ball" id="V7U7yj" />,
      0,
    ],
    softball: ['🥎', <></>, 0],
    flying_disc: ['🥏', <></>, 0],
    croissant: ['🥐', <></>, 4],
    avocado: ['🥑', <></>, 4],
    cucumber: ['🥒', <></>, 4],
    bacon: ['🥓', <></>, 4],
    potato: ['🥔', <></>, 4],
    carrot: ['🥕', <></>, 4],
    baguette_bread: ['🥖', <></>, 4],
    green_salad: ['🥗', <></>, 4],
    shallow_pan_of_food: ['🥘', <></>, 4],
    stuffed_flatbread: ['🥙', <></>, 4],
    egg: ['🥚', <></>, 4],
    glass_of_milk: ['🥛', <></>, 4],
    peanuts: ['🥜', <></>, 4],
    kiwifruit: ['🥝', <></>, 4],
    pancakes: ['🥞', <></>, 4],
    dumpling: ['🥟', <></>, 4],
    fortune_cookie: ['🥠', <></>, 4],
    takeout_box: ['🥡', <></>, 4],
    chopsticks: ['🥢', <></>, 4],
    bowl_with_spoon: ['🥣', <></>, 4],
    cup_with_straw: ['🥤', <></>, 4],
    coconut: ['🥥', <></>, 4],
    broccoli: ['🥦', <></>, 4],
    pie: ['🥧', <></>, 4],
    pretzel: ['🥨', <></>, 4],
    cut_of_meat: ['🥩', <></>, 4],
    sandwich: ['🥪', <></>, 4],
    canned_food: ['🥫', <></>, 4],
    leafy_green: ['🥬', <></>, 4],
    mango: ['🥭', <></>, 4],
    moon_cake: ['🥮', <></>, 4],
    bagel: ['🥯', <></>, 4],
    smiling_face_with_3_hearts: [
      '🥰',
      <FormattedMessage
        defaultMessage="Smiling face with smiling eyes and three hearts"
        id="/NfpNP"
      />,
      7,
    ],
    yawning_face: ['🥱', <></>, 7],
    smiling_face_with_tear: ['🥲', <></>, 7],
    partying_face: [
      '🥳',
      <FormattedMessage
        defaultMessage="Face with party horn and party hat"
        id="nOHfIW"
      />,
      7,
    ],
    woozy_face: [
      '🥴',
      <FormattedMessage
        defaultMessage="Face with uneven eyes and wavy mouth"
        id="4kHH3g"
      />,
      7,
    ],
    hot_face: [
      '🥵',
      <FormattedMessage defaultMessage="Overheated face" id="b++0uJ" />,
      7,
    ],
    cold_face: [
      '🥶',
      <FormattedMessage defaultMessage="Freezing face" id="fN5fKE" />,
      7,
    ],
    ninja: ['🥷', <></>, 6],
    disguised_face: ['🥸', <></>, 7],
    pleading_face: [
      '🥺',
      <FormattedMessage defaultMessage="Face with pleading eyes" id="Wcv2NC" />,
      7,
    ],
    sari: ['🥻', <></>, 5],
    lab_coat: ['🥼', <></>, 5],
    goggles: ['🥽', <></>, 5],
    hiking_boot: ['🥾', <></>, 5],
    womans_flat_shoe: [
      '🥿',
      <FormattedMessage defaultMessage="Flat shoe" id="FAsbxK" />,
      5,
    ],
    crab: ['🦀', <></>, 4],
    lion_face: ['🦁', <></>, 1],
    scorpion: ['🦂', <></>, 1],
    turkey: ['🦃', <></>, 1],
    unicorn_face: ['🦄', <></>, 1],
    eagle: ['🦅', <></>, 1],
    duck: ['🦆', <></>, 1],
    bat: ['🦇', <></>, 1],
    shark: ['🦈', <></>, 1],
    owl: ['🦉', <></>, 1],
    fox_face: ['🦊', <></>, 1],
    butterfly: ['🦋', <></>, 1],
    deer: ['🦌', <></>, 1],
    gorilla: ['🦍', <></>, 1],
    lizard: ['🦎', <></>, 1],
    rhinoceros: ['🦏', <></>, 1],
    shrimp: ['🦐', <></>, 4],
    squid: ['🦑', <></>, 4],
    giraffe_face: ['🦒', <></>, 1],
    zebra_face: ['🦓', <></>, 1],
    hedgehog: ['🦔', <></>, 1],
    sauropod: ['🦕', <></>, 1],
    't-rex': ['🦖', <></>, 1],
    cricket: ['🦗', <></>, 1],
    kangaroo: ['🦘', <></>, 1],
    llama: ['🦙', <></>, 1],
    peacock: ['🦚', <></>, 1],
    hippopotamus: ['🦛', <></>, 1],
    parrot: ['🦜', <></>, 1],
    raccoon: ['🦝', <></>, 1],
    lobster: ['🦞', <></>, 4],
    mosquito: ['🦟', <></>, 1],
    microbe: ['🦠', <></>, 1],
    badger: ['🦡', <></>, 1],
    swan: ['🦢', <></>, 1],
    mammoth: ['🦣', <></>, 1],
    dodo: ['🦤', <></>, 1],
    sloth: ['🦥', <></>, 1],
    otter: ['🦦', <></>, 1],
    orangutan: ['🦧', <></>, 1],
    skunk: ['🦨', <></>, 1],
    flamingo: ['🦩', <></>, 1],
    oyster: ['🦪', <></>, 4],
    beaver: ['🦫', <></>, 1],
    bison: ['🦬', <></>, 1],
    seal: ['🦭', <></>, 1],
    guide_dog: ['🦮', <></>, 1],
    probing_cane: ['🦯', <></>, 5],
    bone: ['🦴', <></>, 6],
    leg: ['🦵', <></>, 6],
    foot: ['🦶', <></>, 6],
    tooth: ['🦷', <></>, 6],
    female_superhero: [
      '🦸‍♀️',
      <FormattedMessage defaultMessage="Woman superhero" id="3ezl2U" />,
      6,
    ],
    male_superhero: [
      '🦸‍♂️',
      <FormattedMessage defaultMessage="Man superhero" id="cgQwKu" />,
      6,
    ],
    superhero: ['🦸', <></>, 6],
    female_supervillain: [
      '🦹‍♀️',
      <FormattedMessage defaultMessage="Woman supervillain" id="EkWcIC" />,
      6,
    ],
    male_supervillain: [
      '🦹‍♂️',
      <FormattedMessage defaultMessage="Man supervillain" id="zPT8ww" />,
      6,
    ],
    supervillain: ['🦹', <></>, 6],
    safety_vest: ['🦺', <></>, 5],
    ear_with_hearing_aid: ['🦻', <></>, 6],
    motorized_wheelchair: ['🦼', <></>, 9],
    manual_wheelchair: ['🦽', <></>, 9],
    mechanical_arm: ['🦾', <></>, 6],
    mechanical_leg: ['🦿', <></>, 6],
    cheese_wedge: ['🧀', <></>, 4],
    cupcake: ['🧁', <></>, 4],
    salt: [
      '🧂',
      <FormattedMessage defaultMessage="Salt shaker" id="xp5yrO" />,
      4,
    ],
    beverage_box: ['🧃', <></>, 4],
    garlic: ['🧄', <></>, 4],
    onion: ['🧅', <></>, 4],
    falafel: ['🧆', <></>, 4],
    waffle: ['🧇', <></>, 4],
    butter: ['🧈', <></>, 4],
    mate_drink: ['🧉', <></>, 4],
    ice_cube: ['🧊', <></>, 4],
    bubble_tea: ['🧋', <></>, 4],
    woman_standing: ['🧍‍♀️', <></>, 6],
    man_standing: ['🧍‍♂️', <></>, 6],
    standing_person: ['🧍', <></>, 6],
    woman_kneeling: ['🧎‍♀️', <></>, 6],
    man_kneeling: ['🧎‍♂️', <></>, 6],
    kneeling_person: ['🧎', <></>, 6],
    deaf_woman: ['🧏‍♀️', <></>, 6],
    deaf_man: ['🧏‍♂️', <></>, 6],
    deaf_person: ['🧏', <></>, 6],
    face_with_monocle: ['🧐', <></>, 7],
    farmer: ['🧑‍🌾', <></>, 6],
    cook: ['🧑‍🍳', <></>, 6],
    person_feeding_baby: ['🧑‍🍼', <></>, 6],
    mx_claus: ['🧑‍🎄', <></>, 6],
    student: ['🧑‍🎓', <></>, 6],
    singer: ['🧑‍🎤', <></>, 6],
    artist: ['🧑‍🎨', <></>, 6],
    teacher: ['🧑‍🏫', <></>, 6],
    factory_worker: ['🧑‍🏭', <></>, 6],
    technologist: ['🧑‍💻', <></>, 6],
    office_worker: ['🧑‍💼', <></>, 6],
    mechanic: ['🧑‍🔧', <></>, 6],
    scientist: ['🧑‍🔬', <></>, 6],
    astronaut: ['🧑‍🚀', <></>, 6],
    firefighter: ['🧑‍🚒', <></>, 6],
    people_holding_hands: ['🧑‍🤝‍🧑', <></>, 6],
    person_with_probing_cane: [
      '🧑‍🦯',
      <FormattedMessage defaultMessage="Person with white cane" id="SNIl3k" />,
      6,
    ],
    red_haired_person: [
      '🧑‍🦰',
      <FormattedMessage defaultMessage="Person: red hair" id="AeyjAa" />,
      6,
    ],
    curly_haired_person: [
      '🧑‍🦱',
      <FormattedMessage defaultMessage="Person: curly hair" id="cGwvV+" />,
      6,
    ],
    bald_person: [
      '🧑‍🦲',
      <FormattedMessage defaultMessage="Person: bald" id="ct+Pmy" />,
      6,
    ],
    white_haired_person: [
      '🧑‍🦳',
      <FormattedMessage defaultMessage="Person: white hair" id="1wi/qn" />,
      6,
    ],
    person_in_motorized_wheelchair: ['🧑‍🦼', <></>, 6],
    person_in_manual_wheelchair: ['🧑‍🦽', <></>, 6],
    health_worker: ['🧑‍⚕️', <></>, 6],
    judge: ['🧑‍⚖️', <></>, 6],
    pilot: ['🧑‍✈️', <></>, 6],
    adult: ['🧑', <></>, 6],
    child: ['🧒', <></>, 6],
    older_adult: ['🧓', <></>, 6],
    woman_with_beard: [
      '🧔‍♀️',
      <FormattedMessage defaultMessage="Woman: beard" id="6aULrQ" />,
      6,
    ],
    man_with_beard: [
      '🧔‍♂️',
      <FormattedMessage defaultMessage="Man: beard" id="sJBa7I" />,
      6,
    ],
    bearded_person: ['🧔', <></>, 6],
    person_with_headscarf: ['🧕', <></>, 6],
    woman_in_steamy_room: ['🧖‍♀️', <></>, 6],
    man_in_steamy_room: ['🧖‍♂️', <></>, 6],
    person_in_steamy_room: ['🧖', <></>, 6],
    woman_climbing: ['🧗‍♀️', <></>, 6],
    man_climbing: ['🧗‍♂️', <></>, 6],
    person_climbing: ['🧗', <></>, 6],
    woman_in_lotus_position: ['🧘‍♀️', <></>, 6],
    man_in_lotus_position: ['🧘‍♂️', <></>, 6],
    person_in_lotus_position: ['🧘', <></>, 6],
    female_mage: [
      '🧙‍♀️',
      <FormattedMessage defaultMessage="Woman mage" id="6nRbHW" />,
      6,
    ],
    male_mage: [
      '🧙‍♂️',
      <FormattedMessage defaultMessage="Man mage" id="42BLqR" />,
      6,
    ],
    mage: ['🧙', <></>, 6],
    female_fairy: [
      '🧚‍♀️',
      <FormattedMessage defaultMessage="Woman fairy" id="8y4I2A" />,
      6,
    ],
    male_fairy: [
      '🧚‍♂️',
      <FormattedMessage defaultMessage="Man fairy" id="DME6P7" />,
      6,
    ],
    fairy: ['🧚', <></>, 6],
    female_vampire: [
      '🧛‍♀️',
      <FormattedMessage defaultMessage="Woman vampire" id="RDuOc4" />,
      6,
    ],
    male_vampire: [
      '🧛‍♂️',
      <FormattedMessage defaultMessage="Man vampire" id="S6R4vM" />,
      6,
    ],
    vampire: ['🧛', <></>, 6],
    mermaid: ['🧜‍♀️', <></>, 6],
    merman: ['🧜‍♂️', <></>, 6],
    merperson: ['🧜', <></>, 6],
    female_elf: [
      '🧝‍♀️',
      <FormattedMessage defaultMessage="Woman elf" id="Vvdv6X" />,
      6,
    ],
    male_elf: [
      '🧝‍♂️',
      <FormattedMessage defaultMessage="Man elf" id="MP8hIR" />,
      6,
    ],
    elf: ['🧝', <></>, 6],
    female_genie: [
      '🧞‍♀️',
      <FormattedMessage defaultMessage="Woman genie" id="2X8b1s" />,
      6,
    ],
    male_genie: [
      '🧞‍♂️',
      <FormattedMessage defaultMessage="Man genie" id="Im/s3S" />,
      6,
    ],
    genie: ['🧞', <></>, 6],
    female_zombie: [
      '🧟‍♀️',
      <FormattedMessage defaultMessage="Woman zombie" id="DcDgUJ" />,
      6,
    ],
    male_zombie: [
      '🧟‍♂️',
      <FormattedMessage defaultMessage="Man zombie" id="jgBdvg" />,
      6,
    ],
    zombie: ['🧟', <></>, 6],
    brain: ['🧠', <></>, 6],
    orange_heart: ['🧡', <></>, 7],
    billed_cap: ['🧢', <></>, 5],
    scarf: ['🧣', <></>, 5],
    gloves: ['🧤', <></>, 5],
    coat: ['🧥', <></>, 5],
    socks: ['🧦', <></>, 5],
    red_envelope: [
      '🧧',
      <FormattedMessage defaultMessage="Red gift envelope" id="PIugPf" />,
      0,
    ],
    firecracker: ['🧨', <></>, 0],
    jigsaw: [
      '🧩',
      <FormattedMessage defaultMessage="Jigsaw puzzle piece" id="6Seo2Q" />,
      0,
    ],
    test_tube: ['🧪', <></>, 5],
    petri_dish: ['🧫', <></>, 5],
    dna: [
      '🧬',
      <FormattedMessage defaultMessage="Dna double helix" id="MSo69Z" />,
      5,
    ],
    compass: ['🧭', <></>, 9],
    abacus: ['🧮', <></>, 5],
    fire_extinguisher: ['🧯', <></>, 5],
    toolbox: ['🧰', <></>, 5],
    bricks: ['🧱', <FormattedMessage defaultMessage="Brick" id="kQK4J2" />, 9],
    magnet: ['🧲', <></>, 5],
    luggage: ['🧳', <></>, 9],
    lotion_bottle: ['🧴', <></>, 5],
    thread: [
      '🧵',
      <FormattedMessage defaultMessage="Spool of thread" id="kOo2UV" />,
      0,
    ],
    yarn: [
      '🧶',
      <FormattedMessage defaultMessage="Ball of yarn" id="I1EN7W" />,
      0,
    ],
    safety_pin: ['🧷', <></>, 5],
    teddy_bear: ['🧸', <></>, 0],
    broom: ['🧹', <></>, 5],
    basket: ['🧺', <></>, 5],
    roll_of_paper: ['🧻', <></>, 5],
    soap: [
      '🧼',
      <FormattedMessage defaultMessage="Bar of soap" id="Mw//+U" />,
      5,
    ],
    sponge: ['🧽', <></>, 5],
    receipt: ['🧾', <></>, 5],
    nazar_amulet: ['🧿', <></>, 0],
    ballet_shoes: ['🩰', <></>, 5],
    'one-piece_swimsuit': ['🩱', <></>, 5],
    briefs: ['🩲', <></>, 5],
    shorts: ['🩳', <></>, 5],
    thong_sandal: ['🩴', <></>, 5],
    drop_of_blood: ['🩸', <></>, 5],
    adhesive_bandage: ['🩹', <></>, 5],
    stethoscope: ['🩺', <></>, 5],
    'yo-yo': ['🪀', <></>, 0],
    kite: ['🪁', <></>, 0],
    parachute: ['🪂', <></>, 9],
    boomerang: ['🪃', <></>, 5],
    magic_wand: ['🪄', <></>, 0],
    pinata: ['🪅', <></>, 0],
    nesting_dolls: ['🪆', <></>, 0],
    ringed_planet: ['🪐', <></>, 9],
    chair: ['🪑', <></>, 5],
    razor: ['🪒', <></>, 5],
    axe: ['🪓', <></>, 5],
    diya_lamp: ['🪔', <></>, 5],
    banjo: ['🪕', <></>, 5],
    military_helmet: ['🪖', <></>, 5],
    accordion: ['🪗', <></>, 5],
    long_drum: ['🪘', <></>, 5],
    coin: ['🪙', <></>, 5],
    carpentry_saw: ['🪚', <></>, 5],
    screwdriver: ['🪛', <></>, 5],
    ladder: ['🪜', <></>, 5],
    hook: ['🪝', <></>, 5],
    mirror: ['🪞', <></>, 5],
    window: ['🪟', <></>, 5],
    plunger: ['🪠', <></>, 5],
    sewing_needle: ['🪡', <></>, 0],
    knot: ['🪢', <></>, 0],
    bucket: ['🪣', <></>, 5],
    mouse_trap: ['🪤', <></>, 5],
    toothbrush: ['🪥', <></>, 5],
    headstone: ['🪦', <></>, 5],
    placard: ['🪧', <></>, 5],
    rock: ['🪨', <></>, 9],
    fly: ['🪰', <></>, 1],
    worm: ['🪱', <></>, 1],
    beetle: ['🪲', <></>, 1],
    cockroach: ['🪳', <></>, 1],
    potted_plant: ['🪴', <></>, 1],
    wood: ['🪵', <></>, 9],
    feather: ['🪶', <></>, 1],
    anatomical_heart: ['🫀', <></>, 6],
    lungs: ['🫁', <></>, 6],
    people_hugging: ['🫂', <></>, 6],
    blueberries: ['🫐', <></>, 4],
    bell_pepper: ['🫑', <></>, 4],
    olive: ['🫒', <></>, 4],
    flatbread: ['🫓', <></>, 4],
    tamale: ['🫔', <></>, 4],
    fondue: ['🫕', <></>, 4],
    teapot: ['🫖', <></>, 4],
    bangbang: [
      '‼️',
      <FormattedMessage defaultMessage="Double exclamation mark" id="Dns2VY" />,
      8,
    ],
    interrobang: [
      '⁉️',
      <FormattedMessage
        defaultMessage="Exclamation question mark"
        id="sQg14P"
      />,
      8,
    ],
    tm: [
      '™️',
      <FormattedMessage defaultMessage="Trade mark sign" id="KjpqdQ" />,
      8,
    ],
    information_source: ['ℹ️', <></>, 8],
    left_right_arrow: ['↔️', <></>, 8],
    arrow_up_down: [
      '↕️',
      <FormattedMessage defaultMessage="Up down arrow" id="ZQ1pqQ" />,
      8,
    ],
    arrow_upper_left: [
      '↖️',
      <FormattedMessage defaultMessage="North west arrow" id="r9T1Nb" />,
      8,
    ],
    arrow_upper_right: [
      '↗️',
      <FormattedMessage defaultMessage="North east arrow" id="oSiEvN" />,
      8,
    ],
    arrow_lower_right: [
      '↘️',
      <FormattedMessage defaultMessage="South east arrow" id="NQoNmL" />,
      8,
    ],
    arrow_lower_left: [
      '↙️',
      <FormattedMessage defaultMessage="South west arrow" id="vG3eBc" />,
      8,
    ],
    leftwards_arrow_with_hook: ['↩️', <></>, 8],
    arrow_right_hook: [
      '↪️',
      <FormattedMessage
        defaultMessage="Rightwards arrow with hook"
        id="YRN0Td"
      />,
      8,
    ],
    watch: ['⌚', <></>, 9],
    hourglass: ['⌛', <></>, 9],
    keyboard: ['⌨️', <></>, 5],
    eject: [
      '⏏️',
      <FormattedMessage defaultMessage="Eject button" id="9zYFQL" />,
      8,
    ],
    fast_forward: [
      '⏩',
      <FormattedMessage
        defaultMessage="Black right-pointing double triangle"
        id="mj5tEg"
      />,
      8,
    ],
    rewind: [
      '⏪',
      <FormattedMessage
        defaultMessage="Black left-pointing double triangle"
        id="xxFJv9"
      />,
      8,
    ],
    arrow_double_up: [
      '⏫',
      <FormattedMessage
        defaultMessage="Black up-pointing double triangle"
        id="OVcOqp"
      />,
      8,
    ],
    arrow_double_down: [
      '⏬',
      <FormattedMessage
        defaultMessage="Black down-pointing double triangle"
        id="PVWnzk"
      />,
      8,
    ],
    black_right_pointing_double_triangle_with_vertical_bar: [
      '⏭️',
      <FormattedMessage defaultMessage="Next track button" id="UEGl8s" />,
      8,
    ],
    black_left_pointing_double_triangle_with_vertical_bar: [
      '⏮️',
      <FormattedMessage defaultMessage="Last track button" id="920xKb" />,
      8,
    ],
    black_right_pointing_triangle_with_double_vertical_bar: [
      '⏯️',
      <FormattedMessage defaultMessage="Play or pause button" id="ZPOiAy" />,
      8,
    ],
    alarm_clock: ['⏰', <></>, 9],
    stopwatch: ['⏱️', <></>, 9],
    timer_clock: ['⏲️', <></>, 9],
    hourglass_flowing_sand: [
      '⏳',
      <FormattedMessage
        defaultMessage="Hourglass with flowing sand"
        id="PQ5Kbo"
      />,
      9,
    ],
    double_vertical_bar: [
      '⏸️',
      <FormattedMessage defaultMessage="Pause button" id="eHfsxu" />,
      8,
    ],
    black_square_for_stop: [
      '⏹️',
      <FormattedMessage defaultMessage="Stop button" id="a1oCYP" />,
      8,
    ],
    black_circle_for_record: [
      '⏺️',
      <FormattedMessage defaultMessage="Record button" id="bMUXaO" />,
      8,
    ],
    m: [
      'Ⓜ️',
      <FormattedMessage
        defaultMessage="Circled latin capital letter m"
        id="EhIt0/"
      />,
      8,
    ],
    black_small_square: ['▪️', <></>, 8],
    white_small_square: ['▫️', <></>, 8],
    arrow_forward: [
      '▶️',
      <FormattedMessage
        defaultMessage="Black right-pointing triangle"
        id="604Mql"
      />,
      8,
    ],
    arrow_backward: [
      '◀️',
      <FormattedMessage
        defaultMessage="Black left-pointing triangle"
        id="2y8Ryj"
      />,
      8,
    ],
    white_medium_square: ['◻️', <></>, 8],
    black_medium_square: ['◼️', <></>, 8],
    white_medium_small_square: ['◽', <></>, 8],
    black_medium_small_square: ['◾', <></>, 8],
    sunny: [
      '☀️',
      <FormattedMessage defaultMessage="Black sun with rays" id="KqiiXI" />,
      9,
    ],
    cloud: ['☁️', <></>, 9],
    umbrella: ['☂️', <></>, 9],
    snowman: ['☃️', <></>, 9],
    comet: ['☄️', <></>, 9],
    phone: [
      '☎️',
      <FormattedMessage defaultMessage="Black telephone" id="f8H7dN" />,
      5,
    ],
    ballot_box_with_check: ['☑️', <></>, 8],
    umbrella_with_rain_drops: ['☔', <></>, 9],
    coffee: [
      '☕',
      <FormattedMessage defaultMessage="Hot beverage" id="KuZMf7" />,
      4,
    ],
    shamrock: ['☘️', <></>, 1],
    point_up: [
      '☝️',
      <FormattedMessage defaultMessage="White up pointing index" id="Y+sitZ" />,
      6,
    ],
    skull_and_crossbones: ['☠️', <></>, 7],
    radioactive_sign: [
      '☢️',
      <FormattedMessage defaultMessage="Radioactive" id="TC3KeQ" />,
      8,
    ],
    biohazard_sign: [
      '☣️',
      <FormattedMessage defaultMessage="Biohazard" id="Fm/nGd" />,
      8,
    ],
    orthodox_cross: ['☦️', <></>, 8],
    star_and_crescent: ['☪️', <></>, 8],
    peace_symbol: ['☮️', <></>, 8],
    yin_yang: ['☯️', <></>, 8],
    wheel_of_dharma: ['☸️', <></>, 8],
    white_frowning_face: [
      '☹️',
      <FormattedMessage defaultMessage="Frowning face" id="AhWuDa" />,
      7,
    ],
    relaxed: [
      '☺️',
      <FormattedMessage defaultMessage="White smiling face" id="JqFvHt" />,
      7,
    ],
    aries: ['♈', <></>, 8],
    taurus: ['♉', <></>, 8],
    gemini: ['♊', <></>, 8],
    cancer: ['♋', <></>, 8],
    leo: ['♌', <></>, 8],
    virgo: ['♍', <></>, 8],
    libra: ['♎', <></>, 8],
    scorpius: ['♏', <></>, 8],
    sagittarius: ['♐', <></>, 8],
    capricorn: ['♑', <></>, 8],
    aquarius: ['♒', <></>, 8],
    pisces: ['♓', <></>, 8],
    chess_pawn: ['♟️', <></>, 0],
    spades: [
      '♠️',
      <FormattedMessage defaultMessage="Black spade suit" id="dK9ECR" />,
      0,
    ],
    clubs: [
      '♣️',
      <FormattedMessage defaultMessage="Black club suit" id="0hNBSr" />,
      0,
    ],
    hearts: [
      '♥️',
      <FormattedMessage defaultMessage="Black heart suit" id="AoQU09" />,
      0,
    ],
    diamonds: [
      '♦️',
      <FormattedMessage defaultMessage="Black diamond suit" id="YjrEA3" />,
      0,
    ],
    hotsprings: [
      '♨️',
      <FormattedMessage defaultMessage="Hot springs" id="Uh4lbS" />,
      9,
    ],
    recycle: [
      '♻️',
      <FormattedMessage
        defaultMessage="Black universal recycling symbol"
        id="k9/zy4"
      />,
      8,
    ],
    infinity: ['♾️', <></>, 8],
    wheelchair: [
      '♿',
      <FormattedMessage defaultMessage="Wheelchair symbol" id="hucLe7" />,
      8,
    ],
    hammer_and_pick: ['⚒️', <></>, 5],
    anchor: ['⚓', <></>, 9],
    crossed_swords: ['⚔️', <></>, 5],
    scales: [
      '⚖️',
      <FormattedMessage defaultMessage="Balance scale" id="dmQjVY" />,
      5,
    ],
    alembic: ['⚗️', <></>, 5],
    gear: ['⚙️', <></>, 5],
    atom_symbol: ['⚛️', <></>, 8],
    fleur_de_lis: [
      '⚜️',
      <FormattedMessage defaultMessage="Fleur-de-lis" id="TvP4qG" />,
      8,
    ],
    warning: [
      '⚠️',
      <FormattedMessage defaultMessage="Warning sign" id="PodrZT" />,
      8,
    ],
    zap: [
      '⚡',
      <FormattedMessage defaultMessage="High voltage sign" id="qbRdb+" />,
      9,
    ],
    transgender_symbol: ['⚧️', <></>, 8],
    white_circle: [
      '⚪',
      <FormattedMessage defaultMessage="Medium white circle" id="PvBdxT" />,
      8,
    ],
    black_circle: [
      '⚫',
      <FormattedMessage defaultMessage="Medium black circle" id="1izL7v" />,
      8,
    ],
    coffin: ['⚰️', <></>, 5],
    funeral_urn: ['⚱️', <></>, 5],
    soccer: [
      '⚽',
      <FormattedMessage defaultMessage="Soccer ball" id="0fmtr0" />,
      0,
    ],
    baseball: ['⚾', <></>, 0],
    snowman_without_snow: ['⛄', <></>, 9],
    partly_sunny: [
      '⛅',
      <FormattedMessage defaultMessage="Sun behind cloud" id="eE6nHx" />,
      9,
    ],
    thunder_cloud_and_rain: [
      '⛈️',
      <FormattedMessage
        defaultMessage="Cloud with lightning and rain"
        id="fb2pPD"
      />,
      9,
    ],
    ophiuchus: ['⛎', <></>, 8],
    pick: ['⛏️', <></>, 5],
    helmet_with_white_cross: [
      '⛑️',
      <FormattedMessage defaultMessage="Rescue worker’s helmet" id="nUqQj/" />,
      5,
    ],
    chains: ['⛓️', <></>, 5],
    no_entry: ['⛔', <></>, 8],
    shinto_shrine: ['⛩️', <></>, 9],
    church: ['⛪', <></>, 9],
    mountain: ['⛰️', <></>, 9],
    umbrella_on_ground: ['⛱️', <></>, 9],
    fountain: ['⛲', <></>, 9],
    golf: [
      '⛳',
      <FormattedMessage defaultMessage="Flag in hole" id="Y+PodS" />,
      0,
    ],
    ferry: ['⛴️', <></>, 9],
    boat: ['⛵', <FormattedMessage defaultMessage="Sailboat" id="yfDIPb" />, 9],
    skier: ['⛷️', <></>, 6],
    ice_skate: ['⛸️', <></>, 0],
    'woman-bouncing-ball': [
      '⛹️‍♀️',
      <FormattedMessage defaultMessage="Woman bouncing ball" id="GzRTyB" />,
      6,
    ],
    'man-bouncing-ball': [
      '⛹️‍♂️',
      <FormattedMessage defaultMessage="Man bouncing ball" id="lFktMX" />,
      6,
    ],
    person_with_ball: [
      '⛹️',
      <FormattedMessage defaultMessage="Person bouncing ball" id="/koEyx" />,
      6,
    ],
    tent: ['⛺', <></>, 9],
    fuelpump: [
      '⛽',
      <FormattedMessage defaultMessage="Fuel pump" id="8grW99" />,
      9,
    ],
    scissors: [
      '✂️',
      <FormattedMessage defaultMessage="Black scissors" id="/uZX1/" />,
      5,
    ],
    white_check_mark: [
      '✅',
      <FormattedMessage defaultMessage="White heavy check mark" id="XRObPk" />,
      8,
    ],
    airplane: ['✈️', <></>, 9],
    email: [
      '✉️',
      <FormattedMessage defaultMessage="Envelope" id="bkcVZm" />,
      5,
    ],
    fist: [
      '✊',
      <FormattedMessage defaultMessage="Raised fist" id="QGMeXP" />,
      6,
    ],
    hand: [
      '✋',
      <FormattedMessage defaultMessage="Raised hand" id="WTlujJ" />,
      6,
    ],
    v: [
      '✌️',
      <FormattedMessage defaultMessage="Victory hand" id="Ng6j8u" />,
      6,
    ],
    writing_hand: ['✍️', <></>, 6],
    pencil2: [
      '✏️',
      <FormattedMessage defaultMessage="Pencil" id="3KssSp" />,
      5,
    ],
    black_nib: ['✒️', <></>, 5],
    heavy_check_mark: ['✔️', <></>, 8],
    heavy_multiplication_x: ['✖️', <></>, 8],
    latin_cross: ['✝️', <></>, 8],
    star_of_david: ['✡️', <></>, 8],
    sparkles: ['✨', <></>, 0],
    eight_spoked_asterisk: ['✳️', <></>, 8],
    eight_pointed_black_star: ['✴️', <></>, 8],
    snowflake: ['❄️', <></>, 9],
    sparkle: ['❇️', <></>, 8],
    x: ['❌', <FormattedMessage defaultMessage="Cross mark" id="/vd3nP" />, 8],
    negative_squared_cross_mark: ['❎', <></>, 8],
    question: [
      '❓',
      <FormattedMessage
        defaultMessage="Black question mark ornament"
        id="hk7PcB"
      />,
      8,
    ],
    grey_question: [
      '❔',
      <FormattedMessage
        defaultMessage="White question mark ornament"
        id="yZN47Y"
      />,
      8,
    ],
    grey_exclamation: [
      '❕',
      <FormattedMessage
        defaultMessage="White exclamation mark ornament"
        id="tVbJlP"
      />,
      8,
    ],
    exclamation: [
      '❗',
      <FormattedMessage
        defaultMessage="Heavy exclamation mark symbol"
        id="9A4Ser"
      />,
      8,
    ],
    heavy_heart_exclamation_mark_ornament: [
      '❣️',
      <FormattedMessage defaultMessage="Heart exclamation" id="SeoQHd" />,
      7,
    ],
    heart_on_fire: ['❤️‍🔥', <></>, 7],
    mending_heart: ['❤️‍🩹', <></>, 7],
    heart: [
      '❤️',
      <FormattedMessage defaultMessage="Heavy black heart" id="EQuyLe" />,
      7,
    ],
    heavy_plus_sign: ['➕', <></>, 8],
    heavy_minus_sign: ['➖', <></>, 8],
    heavy_division_sign: ['➗', <></>, 8],
    arrow_right: [
      '➡️',
      <FormattedMessage defaultMessage="Black rightwards arrow" id="IwRI0l" />,
      8,
    ],
    curly_loop: ['➰', <></>, 8],
    loop: [
      '➿',
      <FormattedMessage defaultMessage="Double curly loop" id="M32haD" />,
      8,
    ],
    arrow_heading_up: [
      '⤴️',
      <FormattedMessage
        defaultMessage="Arrow pointing rightwards then curving upwards"
        id="ZKR6Qc"
      />,
      8,
    ],
    arrow_heading_down: [
      '⤵️',
      <FormattedMessage
        defaultMessage="Arrow pointing rightwards then curving downwards"
        id="sYJFn3"
      />,
      8,
    ],
    arrow_left: [
      '⬅️',
      <FormattedMessage defaultMessage="Leftwards black arrow" id="4lEbTH" />,
      8,
    ],
    arrow_up: [
      '⬆️',
      <FormattedMessage defaultMessage="Upwards black arrow" id="v8TEYm" />,
      8,
    ],
    arrow_down: [
      '⬇️',
      <FormattedMessage defaultMessage="Downwards black arrow" id="RHYeMU" />,
      8,
    ],
    black_large_square: ['⬛', <></>, 8],
    white_large_square: ['⬜', <></>, 8],
    star: [
      '⭐',
      <FormattedMessage defaultMessage="White medium star" id="aEchEj" />,
      9,
    ],
    o: [
      '⭕',
      <FormattedMessage defaultMessage="Heavy large circle" id="0eVMnD" />,
      8,
    ],
    wavy_dash: ['〰️', <></>, 8],
    part_alternation_mark: ['〽️', <></>, 8],
    congratulations: [
      '㊗️',
      <FormattedMessage
        defaultMessage="Circled ideograph congratulation"
        id="kJkoeX"
      />,
      8,
    ],
    secret: [
      '㊙️',
      <FormattedMessage
        defaultMessage="Circled ideograph secret"
        id="PWM0Dy"
      />,
      8,
    ],
  },
};
