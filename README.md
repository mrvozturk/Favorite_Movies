## FAVORİTE MOVİES

#### İçindekiler :

- Introduction
- Redux State Management
- Components
- Actions
- Thunk Middleware
- Constants
- API Usage

### `Introduction`

- Bu uygulama, kullanıcıların bir film veritabanını yönetmelerini sağlayan Redux'u kullanır. Uygulama, filmlerin bir listesini gösterir, kullanıcılara favori filmlerini işaretlemelerine ve favori filmlerini görmelerine olanak tanır.\

### `Redux State Management`

- Ana durum, Redux tarafından data dizisinde yönetilir ve film bilgilerini içerir./

### `Components`

- Ana bileşen, film listesini ve favori filmleri render etmekten sorumludur.
  Favori filmleri açma ve veri çekme için eylemleri tetikler./

### `Actions`

toggleFavorite(movieId)

Bir filmin favori durumunu değiştirmek için eylem yaratıcısıdır./

fetchDataSuccess(data)

Alınan verilerle durumu güncellemek için eylem yaratıcısıdır./

fetchDataFailure(error)

Veri çekme hatası durumunda işlem yapmak için eylem yaratıcısıdır./

### `Thunk Middleware` 
-Redux Thunk kullanarak asenkron bir veri çekme eylemi gerçekleştiren bir fonksiyonu temsil eder;

-fetchData fonksiyonu, dispatch fonksiyonunu içeren bir fonksiyon döndürür./
-İçerideki fetch işlemi, belirtilen URL'den veri çeker./
-Başarılı bir yanıt alındığında, çekilen veri fetchDataSuccess eylemiyle Redux store'a gönderilir./
-Hata durumunda, fetchDataFailure eylemiyle Redux store'a hata bilgisi gönderilir./

### `Constants`

- Sabit değerler, eylem türlerini belirtmek için kullanılır ve böylece string ifadelerin doğrudan kodlanmasından kaçınılır./

### `API Usage`

- Uygulama, RapidAPI anahtarı kullanılarak Movies Database API üzerinden film verilerini çeker/