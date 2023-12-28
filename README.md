# FAVORİTE MOVİES

# Contents :

### - Introduction

### - Redux State Management

##### - Actions

##### - Redux

### - Thunk Middleware

### - API Usage kullanılan api ve nasıl kulanıldığını nerden alındığı vs

### - Folder Structer



### `Introduction`

- Bu uygulama redux yapısı kullanılarak filmler ve favori filmeleri içeren yapıyı yönetir.Filmler RapidAPI anahtarı kullanılarak Movies Database API üzerinden film verilerini çeker ve bu şekilde filmler update edilebilir.Kullanıcılar favori filmlerini seçebilirler.

## `Redux State Management`

#### Actions :

- Burada "toggleFavorite " fonksiyonu bir filmi ekleme veya çıkarma aksiyonlarını gerçekleştirirken "fetchData" fonksiyonu ise bir asenkron işlem içerir ve veri çekme işlemini gerçekleştirir. Bu işlem, belirli bir API'den film verilerini çeker ve sonucuna göre "fetchDataSuccess" veya "fetchDataFailure "aksiyonunu tetiklemektedir.

#### Redux :

- Durumu güncellemek için reducer oluşturulur "rootReducer", bu durumu değiştiren aksiyonlar ve bu aksiyonları işleyen middleware'lerdir.Middleware ise asenkron işlemleri gerçekleştirmemizi sağlar.

### `Thunk Middleware` 

- Bu projede asenkron işlemleri yönetmek için "redux-thunk" middleware'i, "applyMiddleware" kullanılarak entegre edilir ve aksiyon oluşturma fonksiyonları içinde asenkron işlemleri kolayca ele almak için thunk işlevleri kullanılır.

### `API Usage`

- API'den film verilerini çekmek için fetch kullanılır, başarılı olması durumunda fetchDataSuccess aksiyonu ile Redux durumu güncellenir, aksi halde fetchDataFailure aksiyonu ile hata işlenir. Redux durumu, useSelector ile alınıp data olarak kullanılır ve filmler güncel olarak sayfaya gelir
