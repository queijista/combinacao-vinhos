function showCombination() {
  var queijo = document.getElementById("tipo_queijo").value;
  var vinho = document.getElementById("tipo_vinho").value;
  var resultDiv = document.getElementById("result");

  var resultText = '';

  if (queijo) {
      resultText += '<h2>Combinações para o queijo ' + queijo.replace('_', ' ').charAt(0).toUpperCase() + queijo.replace('_', ' ').slice(1) + ':</h2>';
      

      switch(queijo) {
        case 'manchego': 
          resultText += '<p>Combina bem com uvas tipo: Cinsault, Mourvèdre, Porto e Tempranillo.</p>';
          break
        case 'gouda': 
          resultText += '<p>Combina bem com uvas tipo: Cabernet Sauvignon, Grenache, Viognier e Cinsault.</p>';
          break
        case 'gruyere': 
          resultText += '<p>Combina bem com uvas tipo: Merlot, Syrah/Shiraz, Mourvèdre e Pinot Noir.</p>';
          break
        case 'brie': 
          resultText += '<p>Combina bem com uvas tipo: Chardonnay, Riesling e Merlot.</p>';
          break
        case 'camembert': 
          resultText += '<p>Combina bem com uvas tipo: Pinot Noir, Granache e Chenin Blanc.</p>'
          break
        case 'raclette': 
          resultText += '<p>Combina bem com uvas tipo: Chardonnay e Mourvèdre.</p>';
          break
        case 'emmental': 
          resultText += '<p>Combina bem com uvas tipo: Pinot Noir tinto ou rose e Malbec.</p>';
          break
        case 'roquefort': 
          resultText += '<p>Combina bem com uvas tipo: Syrah/Shiraz, Riesling e vinho do Porto.</p>';
          break
        case 'gorgonzola': 
          resultText += '<p>Combina bem com uvas tipo: Tempranillo, Gewürztraminer, Syrah/Shiraz e vinho do Porto.</p>';
          break
        case 'stilton': 
          resultText += '<p>Combina bem com uvas tipo: Cabernet Sauvignon, Riesling e vinho do Porto.</p>';
          break
        case 'epoisses': 
          resultText += '<p>Combina bem com uvas tipo: Pinot Noir, e Cinsault.</p>';
          break
        case 'munster': 
          resultText += '<p>Combina bem com uvas tipo: Riesling e Gewürztraminer.</p>';
          break
        case 'taleggio': 
          resultText += '<p>Combina bem com uvas tipo: Grenache tinto ou rose, Sangiovese e Gewürztraminer.</p>';
          break
        case 'reblochon': 
          resultText += '<p>Combina bem com uvas tipo: Malbec e Nebbiolo.</p>';
          break
        case 'valencay': 
          resultText += '<p>Combina bem com uvas tipo: Sauvignon Blanc e Chenin Blanc.</p>';
          break
        case 'serra_da_estrela': 
          resultText += '<p>Combina bem com uvas tipo: vinho do Porto.</p>';
          break
        case 'saint_nectaire': 
          resultText += '<p>Combina bem com uvas tipo: Viognier, Granache e Chenin Blanc.</p>';
          break
        case 'pecorino_romano': 
          resultText += '<p>Combina bem com uvas tipo: Malbec, Nebbiolo, Sangiovese e vinho do Porto.</p>';
          break
        case 'parmesao': 
          resultText += '<p>Combina bem com uvas tipo: Tempranillo, Nebbiolo, Sangiovese e vinho do Porto.</p>';
          break
        case 'grana_padano': 
          resultText += '<p>Combina bem com uvas tipo: Cabernet Sauvignon, Syrah/Shiraz e Pinot Grigio.</p>';
          break
        case 'comte': 
          resultText += '<p>Combina bem com uvas tipo: Merlot, Chardonnay, Sauvignon Blanc e Syrah/Shiraz.</p>';
          break
        case 'canastra': 
          resultText += '<p>Combina bem com uvas tipo: Malbec e Syrah/Shiraz.</p>';
          break
        case 'chevre': 
          resultText += '<p>Combina bem com uvas tipo: Cinsault, Mourvèdre, Porto e Tempranillo.</p>';
          break
        case 'ricotta': 
          resultText += '<p>Combina bem com uvas tipo: Granache.</p>';
          break
        case 'mozzarella': 
          resultText += '<p>Combina bem com uvas tipo: Sauvignon Blanc e Pinot Grigio.</p>';
          break
        case 'frescal': 
          resultText += '<p>Combina bem com uvas tipo: Pinot Grigio e Chenin Blanc.</p>';
          break
        default: 
          resultText += "<p>Por favor, selecione outro queijo</p>"
          break
      }
  }

  if (vinho) {
      resultText += '<h2>Combinações para o vinho ' + vinho.replace('_', ' ').charAt(0).toUpperCase() + vinho.replace('_', ' ').slice(1) + ':</h2>';
      
      switch (vinho) {
        case 'cabernet_sauvignon':
            resultText += '<p>Combina bem com queijos tipo: Grana Padano, Gouda e Stilton.</p>';
            break;
        case 'merlot':
            resultText += '<p>Combina bem com queijos tipo: Gruyere, Brie e Comte.</p>';
            break;
        case 'pinot_noir':
            resultText += '<p>Se Tinto, combina bem com queijos tipo: Emmental, Epoisses e Camembert.</p>';
            resultText += '<p>Se Rose, combina bem com queijos tipo: Gruyere, Emmental e Camembert.</p>';
            break;
        case 'chardonnay':
            resultText += '<p>Combina bem com queijos tipo: Brie, Raclette e Comte.</p>';
            break;
        case 'sauvignon_blanc':
            resultText += '<p>Combina bem com queijos tipo: Chèvre, Mozzarella, Comte e Valençay.</p>';
            break;
        case 'syrah':
            resultText += '<p>Se Tinto, combina bem com queijos tipo: Roquefort, Gruyere e Grana Padano.</p>';
            resultText += '<p>Se Rose, combina bem com queijos tipo: Gorgonzola, Canastra e Comte.</p>';
            break;
        case 'malbec':
            resultText += '<p>Combina bem com queijos tipo: Pecorino Romano, Reblochon, Emmental e Canastra.</p>';
            break;
        case 'tempranillo':
            resultText += '<p>Combina bem com queijos tipo: Manchego, Parmesão e Gorgonzola.</p>';
            break;
        case 'grenache':
            resultText += '<p>Se Tinto, combina bem com queijos tipo: Camembert, Taleggio e Gouda.</p>';
            resultText += '<p>Se Rose, combina bem com queijos tipo: Saint Nectaire, Ricotta e Taleggio.</p>';
            break;
        case 'nebbiolo':
            resultText += '<p>Combina bem com queijos tipo: Parmesão, Pecorino Romano e Reblochon.</p>';
            break;
        case 'sangiovese':
            resultText += '<p>Combina bem com queijos tipo: Parmesão, Pecorino Romano e Taleggio.</p>';
            break;
        case 'riesling':
            resultText += '<p>Combina bem com queijos tipo: Roquefort, Munster e Brie.</p>';
            break;
        case 'chenin_blanc':
            resultText += '<p>Combina bem com queijos tipo: Saint Nectaire, Camembert, Valençay e Frescal.</p>';
            break;
        case 'viognier':
            resultText += '<p>Combina bem com queijos tipo: Saint Nectaire, Gouda e Chèvre.</p>';
            break;
        case 'pinot_grigio':
            resultText += '<p>Combina bem com queijos tipo: Grana Padano, Mozzarella e Frescal.</p>';
            break;
        case 'traminer':
            resultText += '<p>Combina bem com queijos tipo: Munster, Taleggio e Gorgonzola.</p>';
            break;
        case 'cinsault':
            resultText += '<p>Combina bem com queijos tipo: Gouda, Manchego e Epoisses.</p>';
            break;
        case 'mourvedre':
            resultText += '<p>Combina bem com queijos tipo: Manchego, Gruyere e Raclette.</p>';
            break;
        case 'porto':
            resultText += '<p>Combina bem com queijos fortes, azuis e/ou amanteigados.</p>';
            resultText += '<p>Exemplos: Stilton, Gorgonzola, Roquefort, Serra da Estrela, Parmesão e Manchego.</p>';
            break;
        default:
            resultText += '<p>Tipo de vinho não encontrado.</p>';
            break;
    }
  }

  if (!queijo && !vinho) {
      resultText = '<p>Por favor, selecione um queijo ou um vinho para ver as combinações.</p>';
  }

  resultDiv.innerHTML = resultText;
}