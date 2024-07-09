//   for dropdown   ============================================

 $(document).ready(function(){
    $('.dropdown_btn').click(function(){
        $(this).has('.dropdown_menu').toggleClass('active');
    });


    //  API generate
    $('.api-generate-btn').click(function(){
      $('.apikey-gen-box').removeClass('hide-btn');
      $('.api-generate-btn').addClass('hide-btn');

  });
   
 });

//  chage img    ===============================
 function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "./img/donation-button-black.svg"
    } else {
      pic = "./img/donation-button-white.svg"
    }
    document.getElementById('myImage').src = pic;
  }

 //   ======================     filter    ==============================

const openFilter1 = document.querySelector(".open-filter1");
const filterBox1 = document.querySelector(".filterbox1");
const closeFilter1 = document.querySelector(".close-filter1");

const openFilter2 = document.querySelector(".open-filter2");
const filterBox2 = document.querySelector(".filterbox2");
const closeFilter2 = document.querySelector(".close-filter2");

const massOpenFilter = document.querySelector(".mass-open-filter");
const massFilterbox = document.querySelector(".mass-filterbox");
const massCloseFilter = document.querySelector(".mass-close-filter");

toggleFilter(openFilter1, filterBox1, closeFilter1);
toggleFilter(openFilter2, filterBox2, closeFilter2);
toggleFilter(massOpenFilter, massFilterbox, massCloseFilter);

function toggleFilter(openFilter, filterBox, closeFilter) {
  if(openFilter != null){
  openFilter.addEventListener("click", () => {
    openFilter.classList.add("hide-btn");
    filterBox.classList.remove("hide-btn");
  });
}
if(closeFilter != null){
  closeFilter.addEventListener("click", () => {
    openFilter.classList.remove("hide-btn");
    filterBox.classList.add("hide-btn");
  });
}}

// =================   Add row    =========================

const currency = [`<option value="" disabled="">Select currency</option>`,
                  `<option value="1INCH">1INCH</option>`,
                  `<option value="1INCHBSC">1INCHBSC</option>`,
                  `<option value="AAVE">AAVE</option>`,
                  `<option value="ADA">ADA</option>`,
                  `<option value="AE">AE</option>`,
                  `<option value="ALGO">ALGO</option>`,
                  `<option value="APE">APE</option>`,
                  `<option value="ARK">ARK</option>`,
                  `<option value="ARPA">ARPA</option>`,
                  `<option value="ARV">ARV</option>`,
                  `<option value="ATOM">ATOM</option>`,
                  `<option value="AVA">AVA</option>`,
                  `<option value="AVABSC">AVABSC</option>`,
                  `<option value="AVAERC20">AVAERC20</option>`,
                  `<option value="AVAX">AVAX</option>`,
                  `<option value="AVAXC">AVAXC</option>`,
                  `<option value="AVN">AVN</option>`,
                  `<option value="AXS">AXS</option>`,
                  `<option value="BABYDOGE">BABYDOGE</option>`,
                  `<option value="BAT">BAT</option>`,
                  `<option value="BCD">BCD</option>`,
                  `<option value="BCH">BCH</option>`,
                  `<option value="BEAM">BEAM</option>`,
                  `<option value="BEL">BEL</option>`,
                  `<option value="BIFI">BIFI</option>`,
                  `<option value="BLOCKS">BLOCKS</option>`,
                  `<option value="BNBBSC">BNBBSC</option>`,
                  `<option value="BNBMAINNET">BNBMAINNET</option>`,
                  `<option value="BONE">BONE</option>`,
                  `<option value="BRGBSC">BRGBSC</option>`,
                  `<option value="BRISE">BRISE</option>`,
                  `<option value="BSV">BSV</option>`,
                  `<option value="BTFA">BTFA</option>`,
                  `<option value="BTG">BTG</option>`,
                  `<option value="BTTC">BTTC</option>`,
                  `<option value="BTTCBSC">BTTCBSC</option>`,
                  `<option value="BUSD">BUSD</option>`,
                  `<option value="BUSDBSC">BUSDBSC</option>`,
                  `<option value="C98">C98</option>`,
                  `<option value="CAKE">CAKE</option>`,
                  `<option value="CHR">CHR</option>`,
                  `<option value="CHZ">CHZ</option>`,
                  `<option value="CNS">CNS</option>`,
                  `<option value="COTI">COTI</option>`,
                  `<option value="CRO">CRO</option>`,
                  `<option value="CTSI">CTSI</option>`,
                  `<option value="CUDOS">CUDOS</option>`,
                  `<option value="CULT">CULT</option>`,
                  `<option value="CUSD">CUSD</option>`,
                  `<option value="CVC">CVC</option>`,
                  `<option value="DAI">DAI</option>`,
                  `<option value="DAO">DAO</option>`,
                  `<option value="DASH">DASH</option>`,
                  `<option value="DCR">DCR</option>`,
                  `<option value="DGB">DGB</option>`,
                  `<option value="DGD">DGD</option>`,
                  `<option value="DGMOON">DGMOON</option>`,
                  `<option value="DIVI">DIVI</option>`,
                  `<option value="DOGE">DOGE</option>`,
                  `<option value="DOGECOIN">DOGECOIN</option>`,
                  `<option value="DOT">DOT</option>`,
                  `<option value="EGLD">EGLD</option>`,
                  `<option value="ENJ">ENJ</option>`,
                  `<option value="EOS">EOS</option>`,
                  `<option value="ETC">ETC</option>`,
                  `<option value="ETH">ETH</option>`,
                  `<option value="ETHBSC">ETHBSC</option>`,
                  `<option value="ETHW">ETHW</option>`,
                  `<option value="FEG">FEG</option>`,
                  `<option value="FIL">FIL</option>`,
                  `<option value="FIRO">FIRO</option>`,
                  `<option value="FITFI">FITFI</option>`,
                  `<option value="FLOKI">FLOKI</option>`,
                  `<option value="FLOKIBSC">FLOKIBSC</option>`,
                  `<option value="FLUF">FLUF</option>`,
                  `<option value="FRONT">FRONT</option>`,
                  `<option value="FTM">FTM</option>`,
                  `<option value="FTMMAINNET">FTMMAINNET</option>`,
                  `<option value="FTT">FTT</option>`,
                  `<option value="FUN">FUN</option>`,
                  `<option value="GAFA">GAFA</option>`,
                  `<option value="GAL">GAL</option>`,
                  `<option value="GALAERC20">GALAERC20</option>`,
                  `<option value="GAS">GAS</option>`,
                  `<option value="GGTKN">GGTKN</option>`,
                  `<option value="GHC">GHC</option>`,
                  `<option value="GRS">GRS</option>`,
                  `<option value="GRT">GRT</option>`,
                  `<option value="GSPI">GSPI</option>`,
                  `<option value="GT">GT</option>`,
                  `<option value="GUARD">GUARD</option>`,
                  `<option value="GUSD">GUSD</option>`,
                  `<option value="HBAR">HBAR</option>`,
                  `<option value="HOGE">HOGE</option>`,
                  `<option value="HOT">HOT</option>`,
                  `<option value="HOTCROSS">HOTCROSS</option>`,
                  `<option value="HT">HT</option>`,
                  `<option value="ICX">ICX</option>`,
                  `<option value="ILV">ILV</option>`,
                  `<option value="IOTA">IOTA</option>`,
                  `<option value="IOTX">IOTX</option>`,
                  `<option value="JASMY">JASMY</option>`,
                  `<option value="KEANU">KEANU</option>`,
                  `<option value="KIBA">KIBA</option>`,
                  `<option value="KIBABSC">KIBABSC</option>`,
                  `<option value="KISHU">KISHU</option>`,
                  `<option value="KLAY">KLAY</option>`,
                  `<option value="KLV">KLV</option>`,
                  `<option value="KMD">KMD</option>`,
                  `<option value="KNC">KNC</option>`,
                  `<option value="LEASH">LEASH</option>`,
                  `<option value="LGCY">LGCY</option>`,
                  `<option value="LINK">LINK</option>`,
                  `<option value="LSK">LSK</option>`,
                  `<option value="LTC">LTC</option>`,
                  `<option value="LUNA">LUNA</option>`,
                  `<option value="LUNC">LUNC</option>`,
                  `<option value="MANA">MANA</option>`,
                  `<option value="MARSH">MARSH</option>`,
                  `<option value="MATIC">MATIC</option>`,
                  `<option value="MATICMAINNET">MATICMAINNET</option>`,
                  `<option value="MCO">MCO</option>`,
                  `<option value="MX">MX</option>`,
                  `<option value="NANO">NANO</option>`,
                  `<option value="NEAR">NEAR</option>`,
                  `<option value="NEO">NEO</option>`,
                  `<option value="NFTB">NFTB</option>`,
                  `<option value="NOW">NOW</option>`,
                  `<option value="NPXS">NPXS</option>`,
                  `<option value="NTVRK">NTVRK</option>`,
                  `<option value="NWC">NWC</option>`,
                  `<option value="OCEAN">OCEAN</option>`,
                  `<option value="OKB">OKB</option>`,
                  `<option value="OM">OM</option>`,
                  `<option value="OMG">OMG</option>`,
                  `<option value="ONE">ONE</option>`,
                  `<option value="ONIGI">ONIGI</option>`,
                  `<option value="ONT">ONT</option>`,
                  `<option value="PAX">PAX</option>`,
                  `<option value="PIKA">PIKA</option>`,
                  `<option value="PIT">PIT</option>`,
                  `<option value="POODL">POODL</option>`,
                  `<option value="POOLZ">POOLZ</option>`,
                  `<option value="QTUM">QTUM</option>`,
                  `<option value="QUACK">QUACK</option>`,
                  `<option value="RACA">RACA</option>`,
                  `<option value="RBIF">RBIF</option>`,
                  `<option value="REP">REP</option>`,
                  `<option value="RVN">RVN</option>`,
                  `<option value="RXCG">RXCG</option>`,
                  `<option value="SAND">SAND</option>`,
                  `<option value="SFUND">SFUND</option>`,
                  `<option value="SHIB">SHIB</option>`,
                  `<option value="SHIBBSC">SHIBBSC</option>`,
                  `<option value="SOL">SOL</option>`,
                  `<option value="SPI">SPI</option>`,
                  `<option value="SRK">SRK</option>`,
                  `<option value="STPT">STPT</option>`,
                  `<option value="STRAX">STRAX</option>`,
                  `<option value="SUPER">SUPER</option>`,
                  `<option value="SXPMAINNET">SXPMAINNET</option>`,
                  `<option value="TENSHI">TENSHI</option>`,
                  `<option value="TFUEL">TFUEL</option>`,
                  `<option value="THETA">THETA</option>`,
                  `<option value="TKO">TKO</option>`,
                  `<option value="TOMO">TOMO</option>`,
                  `<option value="TON">TON</option>`,
                  `<option value="TRVL">TRVL</option>`,
                  `<option value="TRX">TRX</option>`,
                  `<option value="TTC">TTC</option>`,
                  `<option value="TUSD">TUSD</option>`,
                  `<option value="TUSDTRC20">TUSDTRC20</option>`,
                  `<option value="UNI">UNI</option>`,
                  `<option value="USDC">USDC</option>`,
                  `<option value="USDCMATIC">USDCMATIC</option>`,
                  `<option value="USDDTRC20">USDDTRC20</option>`,
                  `<option value="USDP">USDP</option>`,
                  `<option value="USDT">USDT</option>`,
                  `<option value="USDTBSC">USDTBSC</option>`,
                  `<option value="USDTERC20">USDTERC20</option>`,
                  `<option value="USDTSOL">USDTSOL</option>`,
                  `<option value="USDTTRC20">USDTTRC20</option>`,
                  `<option value="UST">UST</option>`,
                  `<option value="VET">VET</option>`,
                  `<option value="VIB">VIB</option>`,
                  `<option value="VOLT">VOLT</option>`,
                  `<option value="WABI">WABI</option>`,
                  `<option value="WAVES">WAVES</option>`,
                  `<option value="XCAD">XCAD</option>`,
                  `<option value="XCUR">XCUR</option>`,
                  `<option value="XDC">XDC</option>`,
                  `<option value="XEM">XEM</option>`,
                  `<option value="XLM">XLM</option>`,
                  `<option value="XMR">XMR</option>`,
                  `<option value="XRP">XRP</option>`,
                  `<option value="XTZ">XTZ</option>`,
                  `<option value="XVG">XVG</option>`,
                  `<option value="XYM">XYM</option>`,
                  `<option value="XYO">XYO</option>`,
                  `<option value="XZC">XZC</option>`,
                  `<option value="YFI">YFI</option>`,
                  `<option value="ZBC">ZBC</option>`,
                  `<option value="ZEC">ZEC</option>`,
                  `<option value="ZEN">ZEN</option>`,
                  `<option value="ZIL">ZIL</option>`
                  ]
let allcur = currency.map(item => {
  return item;
}).join('');

const addRowBtn = document.querySelector(".add-row-btn");
const tbody = document.querySelector(".tbody");

    addRowBtn.addEventListener("click",function(e){
    e.preventDefault();
    const newItem = document.createElement("tr");

    newItem.innerHTML = `<td><select type="text">
            ${allcur}
            </select></td>
            <td><input type="text" value=""></td>
            <td class="delete-row"><span class="iconify" data-icon="mdi:bin"></span></td>`;

    tbody.appendChild(newItem);
    })
    
    tbody.addEventListener("click", e => {
        const clickbtn = e.target.parentElement.parentElement
        if (!clickbtn.classList.contains("delete-row")) return;
        else{
          const itemToRemove = clickbtn.parentElement;
            tbody.removeChild(itemToRemove);
        }
    });



  

    