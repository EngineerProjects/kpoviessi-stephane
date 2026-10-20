APP := modern_portfolio
PORT ?= 3000

.PHONY: help install dev build start lint typecheck check clean

help:
	@echo "make install    install dependencies"
	@echo "make dev        start the dev server (PORT=$(PORT))"
	@echo "make build      production build"
	@echo "make start      serve the production build"
	@echo "make lint       run eslint"
	@echo "make typecheck  run tsc"
	@echo "make check      lint + typecheck + build"
	@echo "make clean      remove .next"

$(APP)/node_modules: $(APP)/package-lock.json
	cd $(APP) && npm ci
	@touch $@

install: $(APP)/node_modules

dev: install
	cd $(APP) && npx next dev -p $(PORT)

build: install
	cd $(APP) && npm run build

start: build
	cd $(APP) && npx next start -p $(PORT)

lint: install
	cd $(APP) && npm run lint

typecheck: install
	cd $(APP) && npx tsc --noEmit

check: lint typecheck build

clean:
	rm -rf $(APP)/.next
